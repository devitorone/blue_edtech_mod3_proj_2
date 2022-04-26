const express = require('express');
const router = express.Router();

const charController = require('../controllers/char.controller');

router.get('/find-char', charController.findCharController);
router.get('/find-char/:id', charController.findCharByIdController);
router.post('/create', charController.createCharController);
router.put('/update/:id', charController.updateCharController);
router.delete('/delete/:id', charController.deleteCharController);

module.exports = router;
