const pool = require('../../database/index');
class FichaCandidatoRepository {
  async createFichaCandidato(fichaCandidato) {
    /// VERIFICA SE O CPF JA ESTA CADASTRADO
    const [row] = await pool.query('SELECT CPF FROM FICHA WHERE CPF = ? ', [
      fichaCandidato.CPF,
    ]);
    if (row?.CPF === fichaCandidato.CPF) {
      throw new Error(
        `Já existe um Usuário com esse CPF(${fichaCandidato.CPF}) cadastrado no banco de dados.`
      );
    }

    try {
      const rows = await pool.query(
        'INSERT INTO FICHA (NOMECOMPLETO, CPF, DOCIDENTIDADE, DATANASCIMENTO, NATURALIDADE, IDRACAETNIA, IDSITTRABALHISTA, OUTRASITTRABALHISTA, IDESTADOCIVIL, EMAIL, NECESSIDADEESPECIAL, ENDERECORESIDENCIAL, NUMERO, COMPLEMENTO, BAIRRO, CEP, TELEFONERESIDENCIAL, TELEFONERECADO, TELEFONECELULAR, NOMEPAI, CPFPAI, NOMEMAE, CPFMAE, NOMERESPONSAVEL, IDPARENTESCORESPONSAVEL, IDESTADOCIVILPAI, IDESTADOCIVILMAE, ESTUDA, INSTITUICAOENSINO, NOMEINSTITUICAO, ENDERECOINSTITUICAO, BAIRROINSTITUICAO, SERIEATUAL, TURMA, TURNO, IDESCOLARIDADE, OUTROSCURSOSREALIZADOS, NOMECONTATOEMERGENCIA, TELEFONEEMERGENCIA1, TELEFONEEMERGENCIA2, ALERGIA, SITMEDICAESPECIAL, FRATURASCIRURGIAS, MEDICACAOCONTROLADA, PROVIDENCIARECOMENDADA, FAMILIARTRATAMENTOMEDICO, FAMILIARUSOMEDICAMENTO, FAMILIARDEFICIENCIA, FAMILIARDEPENDENCIAQUIMICA, ACOMPTERAPEUTICO, PROGRAMASOCIAL, AGUAPOTAVEL, REDEESGOTO, IDCOBERTURAMORADIA, RUAPAVIMENTADA, POSSUIELETRICIDADE, COMODOSMORADIA, TIPOIMOVELRESIDENCIA, VALORALUGUEL, IDPARENTESCOPROPRIETARIO, PRESTACAOFINANCIAMENTO, DESPESASDESCONTOS, DESPESASRENDABRUTA, DESPESASMORADIA, DESPESASRENDALIQUIDA, DESPESASEDUCACAO, DESPESASPESSOASRESIDENCIA, DESPESASSAUDE, DESPESASRPC, DESPESASTOTAL, DESPESASOBS, OUTROSGASTOS, SITSOCIOECONOMICOFAMILIAR, OBSERVACOESNECESSARIAS, PARECERASSISTSOCIAL, STATUSPROCESSO, DATACAD, IDUSUARIO) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
        [
          fichaCandidato.NOMECOMPLETO,
          fichaCandidato.CPF,
          fichaCandidato.DOCIDENTIDADE,
          new Date(fichaCandidato.DATANASCIMENTO),
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
      console.log(rows);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getFichaCandidatos(limit, offset) {
    try {
      const totalPage = await pool.query(`SELECT IDFICHA FROM FICHA`);

      const rows = await pool.query(`
      SELECT NOMECOMPLETO, CPF, DATANASCIMENTO
      FROM FICHA
      ORDER BY NOMECOMPLETO ASC
      LIMIT ${limit} OFFSET ${offset} 
      `);
      return {
        users: rows,
        totalDeCandidatos: totalPage?.length,
      };
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

  async getFichas() {
    try {
      const rows = await pool.query(`
      SELECT * FROM FICHA;	
      `);
      return rows;
    } catch (error) {
      throw error;
    }
  }

  async getFichas(limit, offset) {
    try {
      const totalPage = await pool.query(`SELECT IDFICHA FROM FICHA`);

      const rows = await pool.query(`
      SELECT IDFICHA, NOMECOMPLETO, EMAIL, CPF
      FROM FICHA
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
}
module.exports = new FichaCandidatoRepository();
