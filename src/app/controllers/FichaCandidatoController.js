const FichaCandidatoRepository = require('../repositories/FichaCandidatoRepository');

class FichaCandidatoController {
  async createFichaCandidato(request, response) {
    try {
      const fichaCandidato = request.body;
      await FichaCandidatoRepository.createFichaCandidato(fichaCandidato);
      return response
        .status(201)
        .json({ message: 'Ficha do candidato criada com sucesso' });
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
      return response.status(200).json(ficha);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async updateFichaCandidato(request, response) {
    try {
      const fichaCandidato = request.body;

      await FichaCandidatoRepository.updateFichaCandidato(fichaCandidato);

      return response.status(200).json({
        message: 'Ficha do candidato atualizada com sucesso',
      });
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async deleteFichaCandidato(request, response) {
    try {
      const idFicha = request.query.idFicha;
      await FichaCandidatoRepository.deleteFichaCandidato(idFicha);

      return response.status(200).json({
        message: 'Ficha do candidato deletada com sucesso',
      });
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async getFichaCandidatoFiltrado(request, response) {
    try {
      const nome = request.query.nome;
      const cpf = request.query.cpf;
      const ativo = request.query.ativo;
      const page = parseInt(request.query.page) || 1;
      const limit = parseInt(request.query.take) || 5;
      const offset = (page - 1) * limit;

      const fichas = await FichaCandidatoRepository.getFichaCandidatoFiltrado(
        nome,
        cpf,
        ativo,
        limit,
        offset
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

  async deleteBeneficio(request, response) {
    try {
      const idBeneficio = request.query.idBeneficio;
      const idFicha = request.query.idFicha;
      await FichaCandidatoRepository.deleteBeneficio(idFicha, idBeneficio);

      return response.status(200).json({
        message: 'Benefício deletado com sucesso',
      });
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async deleteCompFamiliar(request, response) {
    try {
      const idCompFamiliar = request.query.idCompFamiliar;
      const idFicha = request.query.idFicha;
      await FichaCandidatoRepository.deleteCompFamiliar(
        idFicha,
        idCompFamiliar
      );

      return response.status(200).json({
        message: 'Composição familiar deletada com sucesso',
      });
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }

  async deleteGrupoFamiliar(request, response) {
    try {
      const idGrupoFamiliar = request.query.idGrupoFamiliar;
      const idFicha = request.query.idFicha;
      await FichaCandidatoRepository.deleteGrupoFamiliar(
        idFicha,
        idGrupoFamiliar
      );

      return response.status(200).json({
        message: 'Grupo familiar deletado com sucesso',
      });
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }
}
module.exports = new FichaCandidatoController();
