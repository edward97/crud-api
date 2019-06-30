const express = require('express')
const router = express.Router()
const users = require('../controllers/users.controller')

router.get('/', users.list)
router.post('/', users.create)
router.get('/:id', users.edit)
router.put('/:id', users.update)
router.delete('/:id', users.delete)

module.exports = router