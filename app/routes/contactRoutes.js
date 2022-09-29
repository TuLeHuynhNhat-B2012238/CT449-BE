const express = require('express');
const contactController = require('../controllers/contactController'); //connect route to controller

const router = express.Router(); //create new router object

router
  .route('/')
  .get(contactController.getAllContacts)
  .post(contactController.createContact)
  .delete(contactController.deleteAllContacts);
router.route('/favorite').get(contactController.getFavoriteContacts);
router
  .route('/:id')
  .get(contactController.getContact)
  .put(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
