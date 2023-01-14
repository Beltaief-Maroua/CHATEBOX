const router = require('express').Router();
const paiementControler = require('../Controles/paiement');
router.post('/api/paiement', paiementControler.paiement);

module.exports = {routerPaiement:router};