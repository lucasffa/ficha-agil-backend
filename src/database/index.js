const mysql = require('mysql2/promise');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

//cria o bancodedados e a tabela caso não exista.
//faz também o insert do usuário de adm.
const createAllDatabaseWithTables = [
  (createDatabase = `CREATE DATABASE IF NOT EXISTS db_itaka`),
  (useDatabase = `USE db_itaka`),
  (createTableUsers = `
     CREATE TABLE IF NOT EXISTS users (
       id INT PRIMARY KEY AUTO_INCREMENT,
       name VARCHAR(255) NOT NULL,
       email VARCHAR(255) UNIQUE NOT NULL,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
       updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
       cpf_user VARCHAR(11) UNIQUE NOT NULL
     )
   `),
  (insertUserAdmin = `
   INSERT INTO users (name, email, password, cpf_user)
   VALUES ('Usuário Administrador', 'adm@sistemaitaka.br', '96tqfUFhomk8myPXy^W%gcK9u9#Y8H2%%iwU@do%7gU6', '00000000000');
   
   `),
  (createTableCandidato = `
 CREATE TABLE IF NOT EXISTS candidato (
   candidato_id int PRIMARY KEY AUTO_INCREMENT,
   data_preenchimento datetime not null,
   nome varchar(255) not null,
   cpf varchar(11) not null,
   doc_identidade varchar(14) not null,
   dt_nascimento date not null,
   cidade_naturalidade_id int not null,
   etnia_id int,
   situacao_trabalhista int not null,
   estado_civil int not null,
   email varchar(255),
   necessidade_especial varchar(255),
   logradouro varchar(255),
   numero_endereco varchar(10),
   complemento varchar(255),
   bairro varchar(255),
   cep varchar(8),
   tel_residencia varchar(20),
   tel_recado varchar(20),
   tel_celular varchar(20),
   cidade_residencia_id int not null,
   nome_pai varchar(255),
   cpf_pai varchar(11),
   nome_mae varchar(255),
   cpf_mae varchar(11),
   estado_civil_pais int not null,
   --
   -- Dados do responsável pelo candidato
   --
   responsavel_pelo_candidato varchar(255),
   parentesco_responsavel varchar(90),
   doc_identidade_responsavel varchar(14) not null,
   cpf_responsavel varchar(11) not null,
   email_responsavel varchar(255),
   --
   -- Dados Educacionais do candidato
   --
   candidato_estuda bool not null,
   tipo_instituicao_ensino int not null,
   nome_instituicao_ensino varchar(255),
   logradouro_instituicao_ensino varchar(255),
   numero_endereco_instituicao_ensino varchar(10),
   bairro_instituicao_ensino varchar(255),
   serie_atual_ensino int not null,
   turma_atual varchar(255),
   turno_atual int not null,
   escolaridade int not null,
   outros_cursos varchar(255),
   --
   -- Benefícios pleiteados
   --
   curso_interesse int not null,
   turno_curso_interesse int not null,
   horario_curso_interesse varchar(20),
   --
   -- Condições de saúde do candidato
   --
   nome_contato_emergencia_medica varchar(255),
   tel_contato_emergencia_1 varchar(20),
   tel_contato_emergencia_2 varchar(20),
   alergico_substancia_medicamento varchar(255),
   situacao_medica_especial varchar(255),
   fraturas_cirurgias_recentes varchar(255),
   medicacao_controlada varchar(255),
   providencia_recomendacao_emergencia_medica varchar(255),
   --
   -- Condições sociais e de saúde da família
   --
   quem_familiar_tratamento_medico varchar(255),
   quem_familiar_uso_continuo_medicacao varchar(255),
   quem_familiar_portador_deficiencia varchar(255),
   quem_familiar_dependencia_quimica varchar(255),
   quem_familar_acompanhamento_terapeutico_social varchar(255),
   quem_familiar_beneficio_programa_social varchar(255),
   --
   -- Condições de moradia do candidato
   --
   possui_agua_potavel boolean not null,
   possui_rede_esgoto boolean not null,
   tipo_cobertura_moradia varchar(255),
   rua_pavimentada boolean not null,
   possui_energia_eletrica boolean not null,
   tipo_imovel int not null,
   custo_imovel float,
   cedente_imovel_nome varchar(255),
   cedente_imovel_grau_parentesco varchar(255),
   --
   -- OBSERVAÇÕES QUE O CANDIDATO OU O ENTREVISTADOR JULGUEM NECESSÁRIAS
   observacoes_julgadas_necessarias varchar(1000),
   --
   -- PARECER DO (A) ASSISTENTE SOCIAL
   parecer_assistente_social varchar(1000),
   --
   -- Se o processo foi Deferido ou Indeferido
   situacao_ficha boolean
 )`),
  (createTableParenteFamiliar = `
 CREATE TABLE IF NOT EXISTS parente_familiar (
   parente_familiar_id int PRIMARY KEY AUTO_INCREMENT,
   candidato_id int not null,
   nome varchar(255) not null,
   grau_parentesco varchar(255) not null,
   data_nascimento date not null,
   estado_civil int not null,
   profissao varchar(255) not null,
   situacao_trabalhista int not null,
   escolaridade int not null,
   renda float not null,
   FOREIGN KEY (candidato_id) REFERENCES candidato (candidato_id)
 )`),
  (createTableDespesas = `CREATE TABLE IF NOT EXISTS despesas (
   despesas_id int PRIMARY KEY AUTO_INCREMENT,
   candidato_id int not null,
   tipo_despesa int not null,
   valor float not null,
   -- Serve também para outros gastos pois associa pelo tipo_despesa
   despesas_descricao varchar(1000),
   FOREIGN KEY (candidato_id) REFERENCES candidato (candidato_id)
 )`),
  (createTableSituacaoSocioEconomicaFamiliar = `CREATE TABLE IF NOT EXISTS situacao_socioeconomica_familiar (
   situacao_socioeconomica_familiar_id int PRIMARY KEY AUTO_INCREMENT,
 candidato_id int not null,
 situacao_socioeconomica_familia_descricao varchar(1000),
 FOREIGN KEY (candidato_id) REFERENCES candidato (candidato_id)
 )`),
];

(async () => {
  for (let i = 0; i < createAllDatabaseWithTables.length; i++) {
    const queryAtual = createAllDatabaseWithTables[i];
    try {
      await pool.query(queryAtual);
      console.log(`Tabela ${i} criada ou já existente.`);
    } catch (err) {
      console.error(`Erro ao criar a tabela ${i}:`, err);
    }
  }
})();

exports.query = async (query, values) => {
  const connection = await pool.getConnection();
  const [rows] = await connection.execute(query, values);
  connection.release();
  return rows;
};
