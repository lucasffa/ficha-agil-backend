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

  async getFichaCandidato(request, response) {
    try {
      const page = parseInt(request.query.page) || 1;
      const limit = parseInt(request.query.take) || 5;
      //const ativo = request.query.ativo;
      const offset = (page - 1) * limit;
      const users = await UsersRepository.getFichaCandidatos(limit, offset);
      return response
        .status(200)
        .json({ users: users.users, totalDeUsuarios: users.totalDeUsuarios });
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
}

module.exports = new FichaCandidatoController();
