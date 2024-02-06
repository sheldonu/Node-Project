const express = require('express');
const router = express.Router();

const contactsController = require('../controllers/controllers');

router.get('/', contactsController.getAllBooks);

router.get('/:id', contactsController.getSingleBooks);

router.post('/', contactsController.createContactBooks);

router.put('/:id', contactsController.updateContactBooks);

router.delete('/:id', contactsController.deleteContactBooks);

module.exports = router;