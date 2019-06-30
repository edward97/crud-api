const express = require('express')
const router = express.Router()
const idx = require('../controllers/index.controller')

router.post('/', idx.login)

module.exports = router