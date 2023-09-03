const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');
const FichaCandidatoController = require('./app/controllers/FichaCandidatoController');
const router = Router();

router.post('/login', UsersController.index);
router.post('/createUser', UsersController.createUser);
router.get('/users', UsersController.getUsers);
router.get('/user', UsersController.getUser);
router.put('/updateUser', UsersController.updateUser);

//ficha routes

router.post(
  '/createFichaCandidato',
  FichaCandidatoController.createFichaCandidato
);
router.get('/candidatos', FichaCandidatoController.getFichaCandidato);
router.get(
  '/situacaoTrabalhista',
  FichaCandidatoController.getSituacaoTrabalhista
);
router.get('/racaEtnia', FichaCandidatoController.getRacaEtnia);
module.exports = router;
