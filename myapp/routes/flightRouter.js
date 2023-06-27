const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flightsController');

router.get('/', flightsController.index);
router.get('/new', flightsController.new);
router.post('/', flightsController.create);
router.get('/:id', flightsController.show);
router.get('/:id/edit', flightsController.edit);
router.put('/:id', flightsController.update);
router.delete('/:id', flightsController.delete);

module.exports = router;
