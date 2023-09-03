const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');
const FichaCandidatoController = require('./app/controllers/FichaCandidatoController');
const router = Router();

//login and users' routes
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
router.get('/estadocivil', FichaCandidatoController.getEstadoCivil);
router.get('/coberturamoradia', FichaCandidatoController.getCoberturaMoradia);
router.get('/escolaridade', FichaCandidatoController.getEscolaridade);
router.get('/parentesco', FichaCandidatoController.getParentesco);

module.exports = router;
