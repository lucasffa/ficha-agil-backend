const pool = require('../../database/index');
class FichaCandidatoRepository {
  async createFichaCandidato(fichaCandidato) {
    //Verifica se o cpf está correto
    /// VERIFICA SE O CPF JA ESTA CADASTRADO
    const [row] = await pool.query('SELECT CPF FROM FICHA WHERE CPF = ? ', [
      fichaCandidato.CPF,
    ]);

    if (row?.CPF === fichaCandidato.CPF) {
      throw new Error(
        `Já existe um candidato com esse CPF(${fichaCandidato.CPF}) cadastrado no banco de dados.`
      );
    }

    if (fichaCandidato.DATANASCIMENTO === '') {
      throw new Error(`A Data de nascimento não pode ser vazia.`);
    }

    try {
      const rows = await pool.query(
        'INSERT INTO FICHA (NOMECOMPLETO, CPF, DOCIDENTIDADE, DATANASCIMENTO, NATURALIDADE, IDRACAETNIA, IDSITTRABALHISTA, OUTRASITTRABALHISTA, IDESTADOCIVIL, EMAIL, NECESSIDADEESPECIAL, ENDERECORESIDENCIAL, NUMERO, COMPLEMENTO, BAIRRO, CEP, TELEFONERESIDENCIAL, TELEFONERECADO, TELEFONECELULAR, NOMEPAI, CPFPAI, NOMEMAE, CPFMAE, NOMERESPONSAVEL, IDPARENTESCORESPONSAVEL, IDESTADOCIVILPAI, IDESTADOCIVILMAE, ESTUDA, INSTITUICAOENSINO, NOMEINSTITUICAO, ENDERECOINSTITUICAO, BAIRROINSTITUICAO, SERIEATUAL, TURMA, TURNO, IDESCOLARIDADE, OUTROSCURSOSREALIZADOS, NOMECONTATOEMERGENCIA, TELEFONEEMERGENCIA1, TELEFONEEMERGENCIA2, ALERGIA, SITMEDICAESPECIAL, FRATURASCIRURGIAS, MEDICACAOCONTROLADA, PROVIDENCIARECOMENDADA, FAMILIARTRATAMENTOMEDICO, FAMILIARUSOMEDICAMENTO, FAMILIARDEFICIENCIA, FAMILIARDEPENDENCIAQUIMICA, ACOMPTERAPEUTICO, PROGRAMASOCIAL, AGUAPOTAVEL, REDEESGOTO, IDCOBERTURAMORADIA, RUAPAVIMENTADA, POSSUIELETRICIDADE, COMODOSMORADIA, TIPOIMOVELRESIDENCIA, VALORALUGUEL, IDPARENTESCOPROPRIETARIO, PRESTACAOFINANCIAMENTO, DESPESASDESCONTOS, DESPESASRENDABRUTA, DESPESASMORADIA, DESPESASRENDALIQUIDA, DESPESASEDUCACAO, DESPESASPESSOASRESIDENCIA, DESPESASSAUDE, DESPESASRPC, DESPESASTOTAL, DESPESASOBS, OUTROSGASTOS, SITSOCIOECONOMICOFAMILIAR, OBSERVACOESNECESSARIAS, PARECERASSISTSOCIAL, STATUSPROCESSO, DATACAD, IDUSUARIO) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          fichaCandidato.NOMECOMPLETO,
          fichaCandidato.CPF,
          fichaCandidato.DOCIDENTIDADE,
          fichaCandidato.DATANASCIMENTO,
          fichaCandidato.NATURALIDADE,
          fichaCandidato.IDRACAETNIA,
          fichaCandidato.IDSITTRABALHISTA,
          fichaCandidato.OUTRASITTRABALHISTA,
          fichaCandidato.IDESTADOCIVIL,
          fichaCandidato.EMAIL,
          fichaCandidato.NECESSIDADEESPECIAL,
          fichaCandidato.ENDERECORESIDENCIAL,
          fichaCandidato.NUMERO,
          fichaCandidato.COMPLEMENTO,
          fichaCandidato.BAIRRO,
          fichaCandidato.CEP,
          fichaCandidato.TELEFONERESIDENCIAL,
          fichaCandidato.TELEFONERECADO,
          fichaCandidato.TELEFONECELULAR,
          fichaCandidato.NOMEPAI,
          fichaCandidato.CPFPAI,
          fichaCandidato.NOMEMAE,
          fichaCandidato.CPFMAE,
          fichaCandidato.NOMERESPONSAVEL,
          fichaCandidato.IDPARENTESCORESPONSAVEL,
          fichaCandidato.IDESTADOCIVILPAI,
          fichaCandidato.IDESTADOCIVILMAE,
          fichaCandidato.ESTUDA,
          fichaCandidato.INSTITUICAOENSINO,
          fichaCandidato.NOMEINSTITUICAO,
          fichaCandidato.ENDERECOINSTITUICAO,
          fichaCandidato.BAIRROINSTITUICAO,
          fichaCandidato.SERIEATUAL,
          fichaCandidato.TURMA,
          fichaCandidato.TURNO,
          fichaCandidato.IDESCOLARIDADE,
          fichaCandidato.OUTROSCURSOSREALIZADOS,
          fichaCandidato.NOMECONTATOEMERGENCIA,
          fichaCandidato.TELEFONEEMERGENCIA1,
          fichaCandidato.TELEFONEEMERGENCIA2,
          fichaCandidato.ALERGIA,
          fichaCandidato.SITMEDICAESPECIAL,
          fichaCandidato.FRATURASCIRURGIAS,
          fichaCandidato.MEDICACAOCONTROLADA,
          fichaCandidato.PROVIDENCIARECOMENDADA,
          fichaCandidato.FAMILIARTRATAMENTOMEDICO,
          fichaCandidato.FAMILIARUSOMEDICAMENTO,
          fichaCandidato.FAMILIARDEFICIENCIA,
          fichaCandidato.FAMILIARDEPENDENCIAQUIMICA,
          fichaCandidato.ACOMPTERAPEUTICO,
          fichaCandidato.PROGRAMASOCIAL,
          fichaCandidato.AGUAPOTAVEL,
          fichaCandidato.REDEESGOTO,
          fichaCandidato.IDCOBERTURAMORADIA,
          fichaCandidato.RUAPAVIMENTADA,
          fichaCandidato.POSSUIELETRICIDADE,
          fichaCandidato.COMODOSMORADIA,
          fichaCandidato.TIPOIMOVELRESIDENCIA,
          fichaCandidato.VALORALUGUEL,
          fichaCandidato.IDPARENTESCOPROPRIETARIO,
          fichaCandidato.PRESTACAOFINANCIAMENTO,
          fichaCandidato.DESPESASDESCONTOS,
          fichaCandidato.DESPESASRENDABRUTA,
          fichaCandidato.DESPESASMORADIA,
          fichaCandidato.DESPESASRENDALIQUIDA,
          fichaCandidato.DESPESASEDUCACAO,
          fichaCandidato.DESPESASPESSOASRESIDENCIA,
          fichaCandidato.DESPESASSAUDE,
          fichaCandidato.DESPESASRPC,
          fichaCandidato.DESPESASTOTAL,
          fichaCandidato.DESPESASOBS,
          fichaCandidato.OUTROSGASTOS,
          fichaCandidato.SITSOCIOECONOMICOFAMILIAR,
          fichaCandidato.OBSERVACOESNECESSARIAS,
          fichaCandidato.PARECERASSISTSOCIAL,
          fichaCandidato.STATUSPROCESSO,
          new Date(), //usar datetime now
          fichaCandidato.IDUSUARIO,
        ]
      );

      const idFicha =
        rows.affectedRows > 0
          ? await pool.query(
              'SELECT IDFICHA FROM FICHA WHERE CPF = ? AND DOCIDENTIDADE = ?',
              [fichaCandidato.CPF, fichaCandidato.DOCIDENTIDADE]
            )
          : null;

      //Insert nas tabelas que possuem relacionamento com a ficha
      if (rows.affectedRows > 0 && idFicha !== null) {
        try {
          fichaCandidato.BENEFICIOSPLEITEADOS.forEach(async element => {
            const insertBeneficios = await pool.query(
              'INSERT INTO BENEFICIOS (IDFICHA, PRIORIDADE, ATIVIDADECURSO, TURNO, HORARIO) VALUES (?, ?, ?, ?, ?)',
              [
                idFicha[0].IDFICHA,
                null,
                element.NomeCursoPretendido,
                element.Turno,
                element.Horario,
              ]
            );
            return insertBeneficios;
          });

          fichaCandidato.GRUPOFAMILIAR.forEach(async element => {
            const insertGrupoFamiliar = await pool.query(
              'INSERT INTO GRUPOFAMILIAR (IDFICHAPRINCIPAL, IDFICHAFAMILIAR, IDPARENTESCO) VALUES (?, ?, ?)',
              [
                idFicha[0].IDFICHA,
                element.IdFichaFamiliar,
                element.IdParentesco,
              ]
            );
            return insertGrupoFamiliar;
          });

          fichaCandidato.COMPFAMILIAR.forEach(async element => {
            const insertCompFamiliar = await pool.query(
              'INSERT INTO COMPFAMILIAR (IDFICHA, NOME, IDPARENTESCO, IDADE, IDESTADOCIVIL, PROFISSAO, IDSITTRABALHISTA, IDESCOLARIDADE, RENDA) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
              [
                idFicha[0].IDFICHA,
                element.Nome,
                element.IdParentesco,
                element.Idade,
                element.IdEstadoCivil,
                element.Profissao,
                element.IdSitTrabalhista,
                element.IdEscolaridade,
                element.Renda,
              ]
            );
            return insertCompFamiliar;
          });
        } catch (error) {
          throw new Error(error);
        }
      }

      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getSituacaoTrabalhista() {
    try {
      const rows = await pool.query(`
      SELECT * FROM SITTRABALHISTA WHERE ATIVO = 'S';	
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getRacaEtnia() {
    try {
      const rows = await pool.query(`
      SELECT * FROM RACAETNIA WHERE ATIVO = 'S';	
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getEstadoCivil() {
    try {
      const rows = await pool.query(`
      SELECT * FROM ESTADOCIVIL WHERE ATIVO = 'S';	
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getCoberturaMoradia() {
    try {
      const rows = await pool.query(`
      SELECT * FROM COBERTURAMORADIA WHERE ATIVO = 'S';	
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getEscolaridade() {
    try {
      const rows = await pool.query(`
      SELECT * FROM ESCOLARIDADE WHERE ATIVO = 'S';	
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getParentesco() {
    try {
      const rows = await pool.query(`
      SELECT * FROM PARENTESCO WHERE ATIVO = 'S';	
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getFichas(limit, offset, ATIVO) {
    try {
      const totalPage = await pool.query(
        `SELECT IDFICHA FROM FICHA WHERE ATIVO = "${ATIVO}" AND EXCLUIDO = "N"`
      );

      const rows = await pool.query(`
      SELECT IDFICHA, NOMECOMPLETO, EMAIL, CPF, ATIVO
      FROM FICHA WHERE ATIVO = "${ATIVO}" AND EXCLUIDO = "N"
      ORDER BY NOMECOMPLETO ASC
      LIMIT ${limit} OFFSET ${offset} 
      `);
      return {
        fichasCandidatos: rows,
        totalDefichasCandidatos: totalPage?.length,
      };
    } catch (error) {
      throw error;
    }
  }

  async getFichaById(id) {
    try {
      const rows = await pool.query(`
      SELECT * FROM FICHA WHERE IDFICHA = ${id} AND EXCLUIDO = "N"
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async updateFichaCandidato(fichaCandidato, IDFICHA) {
    try {
      const updateFicha = await pool.query(
        `UPDATE FICHA SET
            NOMECOMPLETO = ?,
            CPF = ?,
            DOCIDENTIDADE = ?,
            DATANASCIMENTO = ?,
            NATURALIDADE = ?,
            IDRACAETNIA = ?,
            IDSITTRABALHISTA = ?,
            OUTRASITTRABALHISTA = ?,
            IDESTADOCIVIL = ?,
            EMAIL = ?,
            NECESSIDADEESPECIAL = ?,
            ENDERECORESIDENCIAL = ?,
            NUMERO = ?,
            COMPLEMENTO = ?,
            BAIRRO = ?,
            CEP = ?,
            TELEFONERESIDENCIAL = ?,
            TELEFONERECADO = ?,
            TELEFONECELULAR = ?,
            NOMEPAI = ?,
            CPFPAI = ?,
            NOMEMAE = ?,
            CPFMAE = ?,
            NOMERESPONSAVEL = ?,
            IDPARENTESCORESPONSAVEL = ?,
            IDESTADOCIVILPAI = ?,
            IDESTADOCIVILMAE = ?,
            ESTUDA = ?,
            INSTITUICAOENSINO = ?,
            NOMEINSTITUICAO = ?,
            ENDERECOINSTITUICAO = ?,
            BAIRROINSTITUICAO = ?,
            SERIEATUAL = ?,
            TURMA = ?,
            TURNO = ?,
            IDESCOLARIDADE = ?,
            OUTROSCURSOSREALIZADOS = ?,
            NOMECONTATOEMERGENCIA = ?,
            TELEFONEEMERGENCIA1 = ?,
            TELEFONEEMERGENCIA2 = ?,
            ALERGIA = ?,
            SITMEDICAESPECIAL = ?,
            FRATURASCIRURGIAS = ?,
            MEDICACAOCONTROLADA = ?,
            PROVIDENCIARECOMENDADA = ?,
            FAMILIARTRATAMENTOMEDICO = ?,
            FAMILIARUSOMEDICAMENTO = ?,
            FAMILIARDEFICIENCIA = ?,
            FAMILIARDEPENDENCIAQUIMICA = ?,
            ACOMPTERAPEUTICO = ?,
            PROGRAMASOCIAL = ?,
            AGUAPOTAVEL = ?,
            REDEESGOTO = ?,
            IDCOBERTURAMORADIA = ?,
            RUAPAVIMENTADA = ?,
            POSSUIELETRICIDADE = ?,
            COMODOSMORADIA = ?,
            TIPOIMOVELRESIDENCIA = ?,
            VALORALUGUEL = ?,
            IDPARENTESCOPROPRIETARIO = ?,
            PRESTACAOFINANCIAMENTO = ?,
            DESPESASDESCONTOS = ?,
            DESPESASRENDABRUTA = ?,
            DESPESASMORADIA = ?,
            DESPESASRENDALIQUIDA = ?,
            DESPESASEDUCACAO = ?,
            DESPESASPESSOASRESIDENCIA = ?,
            DESPESASSAUDE = ?,
            DESPESASRPC = ?,
            DESPESASTOTAL = ?,
            DESPESASOBS = ?,
            OUTROSGASTOS = ?,
            SITSOCIOECONOMICOFAMILIAR = ?,
            OBSERVACOESNECESSARIAS = ?,
            PARECERASSISTSOCIAL = ?,
            STATUSPROCESSO = ?,
            DATACAD = ?,
            IDUSUARIO = ?
          WHERE IDFICHA = ?`,
        [
          fichaCandidato.NOMECOMPLETO,
          fichaCandidato.CPF,
          fichaCandidato.DOCIDENTIDADE,
          fichaCandidato.DATANASCIMENTO,
          fichaCandidato.NATURALIDADE,
          fichaCandidato.IDRACAETNIA,
          fichaCandidato.IDSITTRABALHISTA,
          fichaCandidato.OUTRASITTRABALHISTA,
          fichaCandidato.IDESTADOCIVIL,
          fichaCandidato.EMAIL,
          fichaCandidato.NECESSIDADEESPECIAL,
          fichaCandidato.ENDERECORESIDENCIAL,
          fichaCandidato.NUMERO,
          fichaCandidato.COMPLEMENTO,
          fichaCandidato.BAIRRO,
          fichaCandidato.CEP,
          fichaCandidato.TELEFONERESIDENCIAL,
          fichaCandidato.TELEFONERECADO,
          fichaCandidato.TELEFONECELULAR,
          fichaCandidato.NOMEPAI,
          fichaCandidato.CPFPAI,
          fichaCandidato.NOMEMAE,
          fichaCandidato.CPFMAE,
          fichaCandidato.NOMERESPONSAVEL,
          fichaCandidato.IDPARENTESCORESPONSAVEL,
          fichaCandidato.IDESTADOCIVILPAI,
          fichaCandidato.IDESTADOCIVILMAE,
          fichaCandidato.ESTUDA,
          fichaCandidato.INSTITUICAOENSINO,
          fichaCandidato.NOMEINSTITUICAO,
          fichaCandidato.ENDERECOINSTITUICAO,
          fichaCandidato.BAIRROINSTITUICAO,
          fichaCandidato.SERIEATUAL,
          fichaCandidato.TURMA,
          fichaCandidato.TURNO,
          fichaCandidato.IDESCOLARIDADE,
          fichaCandidato.OUTROSCURSOSREALIZADOS,
          fichaCandidato.NOMECONTATOEMERGENCIA,
          fichaCandidato.TELEFONEEMERGENCIA1,
          fichaCandidato.TELEFONEEMERGENCIA2,
          fichaCandidato.ALERGIA,
          fichaCandidato.SITMEDICAESPECIAL,
          fichaCandidato.FRATURASCIRURGIAS,
          fichaCandidato.MEDICACAOCONTROLADA,
          fichaCandidato.PROVIDENCIARECOMENDADA,
          fichaCandidato.FAMILIARTRATAMENTOMEDICO,
          fichaCandidato.FAMILIARUSOMEDICAMENTO,
          fichaCandidato.FAMILIARDEFICIENCIA,
          fichaCandidato.FAMILIARDEPENDENCIAQUIMICA,
          fichaCandidato.ACOMPTERAPEUTICO,
          fichaCandidato.PROGRAMASOCIAL,
          fichaCandidato.AGUAPOTAVEL,
          fichaCandidato.REDEESGOTO,
          fichaCandidato.IDCOBERTURAMORADIA,
          fichaCandidato.RUAPAVIMENTADA,
          fichaCandidato.POSSUIELETRICIDADE,
          fichaCandidato.COMODOSMORADIA,
          fichaCandidato.TIPOIMOVELRESIDENCIA,
          fichaCandidato.VALORALUGUEL,
          fichaCandidato.IDPARENTESCOPROPRIETARIO,
          fichaCandidato.PRESTACAOFINANCIAMENTO,
          fichaCandidato.DESPESASDESCONTOS,
          fichaCandidato.DESPESASRENDABRUTA,
          fichaCandidato.DESPESASMORADIA,
          fichaCandidato.DESPESASRENDALIQUIDA,
          fichaCandidato.DESPESASEDUCACAO,
          fichaCandidato.DESPESASPESSOASRESIDENCIA,
          fichaCandidato.DESPESASSAUDE,
          fichaCandidato.DESPESASRPC,
          fichaCandidato.DESPESASTOTAL,
          fichaCandidato.DESPESASOBS,
          fichaCandidato.OUTROSGASTOS,
          fichaCandidato.SITSOCIOECONOMICOFAMILIAR,
          fichaCandidato.OBSERVACOESNECESSARIAS,
          fichaCandidato.PARECERASSISTSOCIAL,
          fichaCandidato.STATUSPROCESSO,
          new Date(),
          fichaCandidato.IDUSUARIO,
          IDFICHA
        ]
      );

      return updateFicha;
      
    } catch (error) {
      throw error;
    }
  }
  
}
module.exports = new FichaCandidatoRepository();