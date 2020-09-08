const express = require('express')
const controller = require('../controllers/position')
const router = express.Router()

router.get('/all', controller.allPositions)
router.post('/create', controller.createPosition)
router.patch('/:id/update', controller.updateById)
router.delete('/:id/delete', controller.deleteById)

module.exports = router