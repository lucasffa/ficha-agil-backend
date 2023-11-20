const { Router } = require('express');

const UsersController = require('./app/controllers/UsersController');
const FichaCandidatoController = require('./app/controllers/FichaCandidatoController');
const router = Router();
const authenticateToken = require('./app/middlewares/AuthenticateToken');

//login and users' routes
router.post('/login', UsersController.index);
router.post('/logout', authenticateToken, UsersController.logout);
router.post('/createUser', authenticateToken, UsersController.createUser);
router.get('/users', authenticateToken, UsersController.getUsers);
router.get('/user', authenticateToken, UsersController.getUser);
router.put('/updateUser', authenticateToken, UsersController.updateUser);

//ficha routes
router.post(
  '/createFichaCandidato',
  authenticateToken,
  FichaCandidatoController.createFichaCandidato
);
router.get(
  '/situacaoTrabalhista',
  authenticateToken,
  FichaCandidatoController.getSituacaoTrabalhista
);
router.get(
  '/racaEtnia',
  authenticateToken,
  FichaCandidatoController.getRacaEtnia
);
router.get(
  '/estadocivil',
  authenticateToken,
  FichaCandidatoController.getEstadoCivil
);
router.get(
  '/coberturamoradia',
  authenticateToken,
  FichaCandidatoController.getCoberturaMoradia
);
router.get(
  '/escolaridade',
  authenticateToken,
  FichaCandidatoController.getEscolaridade
);
router.get(
  '/parentesco',
  authenticateToken,
  FichaCandidatoController.getParentesco
);
router.get('/fichas', authenticateToken, FichaCandidatoController.getFichas);
router.get('/ficha', authenticateToken, FichaCandidatoController.getFichaById);

router.put(
  `/updateFicha`,
  authenticateToken,
  FichaCandidatoController.updateFichaCandidato
);

router.delete(
  '/deleteFicha',
  authenticateToken,
  FichaCandidatoController.deleteFichaCandidato
);
module.exports = router;
