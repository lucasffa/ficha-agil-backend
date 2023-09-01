const FichaCandidatoRepository = require('../repositories/FichaCandidatoRepository');

class FichaCandidatoController {
  async createFichaCandidato(request, response) {
    const fichaCandidato = request.body.Ficha;
    try {
      await FichaCandidatoRepository.createFichaCandidato(fichaCandidato);
    } catch (err) {
      return response.status(401).json({
        message: err.message,
      });
    }
  }
}

module.exports = new FichaCandidatoController();
