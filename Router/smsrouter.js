const router = require('express').Router()
const getControler = require('../Controles/smsverifacation')
router.post('/api/getsms',getControler.sendSms)

module.exports = {smsraouter:router}