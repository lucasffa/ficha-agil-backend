const FichaCandidatoRepository = require('../repositories/FichaCandidatoRepository');


class FichaCandidatoController {
  async createFichaCandidato(request, response) {
    
    try {

      
      const {NOMECOMPLETO, CPF, DOCIDENTIDADE, DATANASCIMENTO, NATURALIDADE, IDRACAETNIA, IDSITTRABALHISTA, OUTRASITTRABALHISTA, IDESTADOCIVIL, EMAIL, NECESSIDADEESPECIAL, ENDERECORESIDENCIAL, NUMERO, COMPLEMENTO, BAIRRO, CEP, TELEFONERESIDENCIAL, TELEFONERECADO, TELEFONECELULAR, NOMEPAI, CPFPAI, NOMEMAE, CPFMAE, NOMERESPONSAVEL, IDPARENTESCORESPONSAVEL, IDESTADOCIVILPAI, IDESTADOCIVILMAE, ESTUDA, INSTITUICAOENSINO, NOMEINSTITUICAO, ENDERECOINSTITUICAO, BAIRROINSTITUICAO, SERIEATUAL, TURMA, TURNO, IDESCOLARIDADE, OUTROSCURSOSREALIZADOS, NOMECONTATOEMERGENCIA, TELEFONEEMERGENCIA1, TELEFONEEMERGENCIA2, ALERGIA, SITMEDICAESPECIAL, FRATURASCIRURGIAS, MEDICACAOCONTROLADA, PROVIDENCIARECOMENDADA, FAMILIARTRATAMENTOMEDICO, FAMILIARUSOMEDICAMENTO, FAMILIARDEFICIENCIA, FAMILIARDEPENDENCIAQUIMICA, ACOMPTERAPEUTICO, PROGRAMASOCIAL, AGUAPOTAVEL, REDEESGOTO, IDCOBERTURAMORADIA, RUAPAVIMENTADA, POSSUIELETRICIDADE, COMODOSMORADIA, TIPOIMOVELRESIDENCIA, VALORALUGUEL, IDPARENTESCOPROPRIETARIO, PRESTACAOFINANCIAMENTO, DESPESASDESCONTOS, DESPESASRENDABRUTA, DESPESASMORADIA, DESPESASRENDALIQUIDA, DESPESASEDUCACAO, DESPESASPESSOASRESIDENCIA, DESPESASSAUDE, DESPESASRPC, DESPESASTOTAL, DESPESASOBS, OUTROSGASTOS, SITSOCIOECONOMICOFAMILIAR, OBSERVACOESNECESSARIAS, PARECERASSISTSOCIAL, STATUSPROCESSO, DATACAD, IDUSUARIO } = request.body;


      const fichaCandidato = {NOMECOMPLETO, CPF, DOCIDENTIDADE, DATANASCIMENTO, NATURALIDADE, IDRACAETNIA, IDSITTRABALHISTA, OUTRASITTRABALHISTA, IDESTADOCIVIL, EMAIL, NECESSIDADEESPECIAL, ENDERECORESIDENCIAL, NUMERO, COMPLEMENTO, BAIRRO, CEP, TELEFONERESIDENCIAL, TELEFONERECADO, TELEFONECELULAR, NOMEPAI, CPFPAI, NOMEMAE, CPFMAE, NOMERESPONSAVEL, IDPARENTESCORESPONSAVEL, IDESTADOCIVILPAI, IDESTADOCIVILMAE, ESTUDA, INSTITUICAOENSINO, NOMEINSTITUICAO, ENDERECOINSTITUICAO, BAIRROINSTITUICAO, SERIEATUAL, TURMA, TURNO, IDESCOLARIDADE, OUTROSCURSOSREALIZADOS, NOMECONTATOEMERGENCIA, TELEFONEEMERGENCIA1, TELEFONEEMERGENCIA2, ALERGIA, SITMEDICAESPECIAL, FRATURASCIRURGIAS, MEDICACAOCONTROLADA, PROVIDENCIARECOMENDADA, FAMILIARTRATAMENTOMEDICO, FAMILIARUSOMEDICAMENTO, FAMILIARDEFICIENCIA, FAMILIARDEPENDENCIAQUIMICA, ACOMPTERAPEUTICO, PROGRAMASOCIAL, AGUAPOTAVEL, REDEESGOTO, IDCOBERTURAMORADIA, RUAPAVIMENTADA, POSSUIELETRICIDADE, COMODOSMORADIA, TIPOIMOVELRESIDENCIA, VALORALUGUEL, IDPARENTESCOPROPRIETARIO, PRESTACAOFINANCIAMENTO, DESPESASDESCONTOS, DESPESASRENDABRUTA, DESPESASMORADIA, DESPESASRENDALIQUIDA, DESPESASEDUCACAO, DESPESASPESSOASRESIDENCIA, DESPESASSAUDE, DESPESASRPC, DESPESASTOTAL, DESPESASOBS, OUTROSGASTOS, SITSOCIOECONOMICOFAMILIAR, OBSERVACOESNECESSARIAS, PARECERASSISTSOCIAL, STATUSPROCESSO, DATACAD, IDUSUARIO };


      await FichaCandidatoRepository.createFichaCandidato(fichaCandidato);

      return response.status(201).json({ message: 'Ficha do candidato criada com sucesso' });
    } catch (err) {
      console.error(err); 

      return response.status(401).json({
        message: err.message,
       

      });
     
    }
  }
}

module.exports = new FichaCandidatoController();