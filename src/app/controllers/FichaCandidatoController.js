const FichaCandidatoRepository = require("../repositories/FichaCandidatoRepository");

class FichaCandidatoController {
  async createFichaCandidato(request, response) {
    try {
      const {
        NOMECOMPLETO,
        CPF,
        DOCIDENTIDADE,
        DATANASCIMENTO,
        NATURALIDADE,
        IDRACAETNIA,
        IDSITTRABALHISTA,
        OUTRASITTRABALHISTA,
        IDESTADOCIVIL,
        EMAIL,
        NECESSIDADEESPECIAL,
        ENDERECORESIDENCIAL,
        NUMERO,
        COMPLEMENTO,
        BAIRRO,
        CEP,
        TELEFONERESIDENCIAL,
        TELEFONERECADO,
        TELEFONECELULAR,
        NOMEPAI,
        CPFPAI,
        NOMEMAE,
        CPFMAE,
        NOMERESPONSAVEL,
        IDPARENTESCORESPONSAVEL,
        IDESTADOCIVILPAI,
        IDESTADOCIVILMAE,
        ESTUDA,
        INSTITUICAOENSINO,
        NOMEINSTITUICAO,
        ENDERECOINSTITUICAO,
        BAIRROINSTITUICAO,
        SERIEATUAL,
        TURMA,
        TURNO,
        IDESCOLARIDADE,
        OUTROSCURSOSREALIZADOS,
        NOMECONTATOEMERGENCIA,
        TELEFONEEMERGENCIA1,
        TELEFONEEMERGENCIA2,
        ALERGIA,
        SITMEDICAESPECIAL,
        FRATURASCIRURGIAS,
        MEDICACAOCONTROLADA,
        PROVIDENCIARECOMENDADA,
        FAMILIARTRATAMENTOMEDICO,
        FAMILIARUSOMEDICAMENTO,
        FAMILIARDEFICIENCIA,
        FAMILIARDEPENDENCIAQUIMICA,
        ACOMPTERAPEUTICO,
        PROGRAMASOCIAL,
        AGUAPOTAVEL,
        REDEESGOTO,
        IDCOBERTURAMORADIA,
        RUAPAVIMENTADA,
        POSSUIELETRICIDADE,
        COMODOSMORADIA,
        TIPOIMOVELRESIDENCIA,
        VALORALUGUEL,
        IDPARENTESCOPROPRIETARIO,
        PRESTACAOFINANCIAMENTO,
        DESPESASDESCONTOS,
        DESPESASRENDABRUTA,
        DESPESASMORADIA,
        DESPESASRENDALIQUIDA,
        DESPESASEDUCACAO,
        DESPESASPESSOASRESIDENCIA,
        DESPESASSAUDE,
        DESPESASRPC,
        DESPESASTOTAL,
        DESPESASOBS,
        OUTROSGASTOS,
        SITSOCIOECONOMICOFAMILIAR,
        OBSERVACOESNECESSARIAS,
        PARECERASSISTSOCIAL,
        STATUSPROCESSO,
        DATACAD,
        IDUSUARIO,
      } = request.body;

      const fichaCandidato = {
        NOMECOMPLETO,
        CPF,
        DOCIDENTIDADE,
        DATANASCIMENTO,
        NATURALIDADE,
        IDRACAETNIA,
        IDSITTRABALHISTA,
        OUTRASITTRABALHISTA,
        IDESTADOCIVIL,
        EMAIL,
        NECESSIDADEESPECIAL,
        ENDERECORESIDENCIAL,
        NUMERO,
        COMPLEMENTO,
        BAIRRO,
        CEP,
        TELEFONERESIDENCIAL,
        TELEFONERECADO,
        TELEFONECELULAR,
        NOMEPAI,
        CPFPAI,
        NOMEMAE,
        CPFMAE,
        NOMERESPONSAVEL,
        IDPARENTESCORESPONSAVEL,
        IDESTADOCIVILPAI,
        IDESTADOCIVILMAE,
        ESTUDA,
        INSTITUICAOENSINO,
        NOMEINSTITUICAO,
        ENDERECOINSTITUICAO,
        BAIRROINSTITUICAO,
        SERIEATUAL,
        TURMA,
        TURNO,
        IDESCOLARIDADE,
        OUTROSCURSOSREALIZADOS,
        NOMECONTATOEMERGENCIA,
        TELEFONEEMERGENCIA1,
        TELEFONEEMERGENCIA2,
        ALERGIA,
        SITMEDICAESPECIAL,
        FRATURASCIRURGIAS,
        MEDICACAOCONTROLADA,
        PROVIDENCIARECOMENDADA,
        FAMILIARTRATAMENTOMEDICO,
        FAMILIARUSOMEDICAMENTO,
        FAMILIARDEFICIENCIA,
        FAMILIARDEPENDENCIAQUIMICA,
        ACOMPTERAPEUTICO,
        PROGRAMASOCIAL,
        AGUAPOTAVEL,
        REDEESGOTO,
        IDCOBERTURAMORADIA,
        RUAPAVIMENTADA,
        POSSUIELETRICIDADE,
        COMODOSMORADIA,
        TIPOIMOVELRESIDENCIA,
        VALORALUGUEL,
        IDPARENTESCOPROPRIETARIO,
        PRESTACAOFINANCIAMENTO,
        DESPESASDESCONTOS,
        DESPESASRENDABRUTA,
        DESPESASMORADIA,
        DESPESASRENDALIQUIDA,
        DESPESASEDUCACAO,
        DESPESASPESSOASRESIDENCIA,
        DESPESASSAUDE,
        DESPESASRPC,
        DESPESASTOTAL,
        DESPESASOBS,
        OUTROSGASTOS,
        SITSOCIOECONOMICOFAMILIAR,
        OBSERVACOESNECESSARIAS,
        PARECERASSISTSOCIAL,
        STATUSPROCESSO,
        DATACAD,
        IDUSUARIO,
      };

      await FichaCandidatoRepository.createFichaCandidato(fichaCandidato);

      return response
        .status(201)
        .json({ message: "Ficha do candidato criada com sucesso" });
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getSituacaoTrabalhista(request, response) {
    try {
      const SituacaoTrabalhista =
        await FichaCandidatoRepository.getSituacaoTrabalhista();
      return response.status(200).json(SituacaoTrabalhista);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getRacaEtnia(request, response) {
    try {
      const RacaEtnia = await FichaCandidatoRepository.getRacaEtnia();
      return response.status(200).json(RacaEtnia);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getEstadoCivil(request, response) {
    try {
      const EstadoCivil = await FichaCandidatoRepository.getEstadoCivil();
      return response.status(200).json(EstadoCivil);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getCoberturaMoradia(request, response) {
    try {
      const CoberturaMoradia =
        await FichaCandidatoRepository.getCoberturaMoradia();
      return response.status(200).json(CoberturaMoradia);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getEscolaridade(request, response) {
    try {
      const Escolaridade = await FichaCandidatoRepository.getEscolaridade();
      return response.status(200).json(Escolaridade);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getParentesco(request, response) {
    try {
      const Parentesco = await FichaCandidatoRepository.getParentesco();
      return response.status(200).json(Parentesco);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getFichas(request, response) {
    try {
      const page = parseInt(request.query.page) || 1;
      const limit = parseInt(request.query.take) || 5;
      const ativo = request.query.ativo;
      const offset = (page - 1) * limit;
      const fichas = await FichaCandidatoRepository.getFichas(
        limit,
        offset,
        ativo
      );
      return response.status(200).json({
        fichasCandidatos: fichas.fichasCandidatos,
        totalDefichasCandidatos: fichas.totalDefichasCandidatos,
      });
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getFichaById(request, response) {
    try {
      const idFicha = request.query.idFicha;
      const ficha = await FichaCandidatoRepository.getFichaById(idFicha);
      return response.status(200).json(...ficha);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async updateFichaCandidato(request, response) {
    try {
      const fichaCandidato = request.body;

      const updateFicha = await FichaCandidatoRepository.updateFichaCandidato(
        fichaCandidato
      );

      return response.status(200).json({
        message: "atualizado",
        updatedData: updateFicha,
      });
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }
}
module.exports = new FichaCandidatoController();
