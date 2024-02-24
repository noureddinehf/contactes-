const express = require('express');
const router = express.Router();
const contactController = require('../Controllers/nouri');

router.get('/get', contactController.get);
router.post('/post', contactController.post);
router.get('/delete/:id', contactController.delete);  // Corrected from 'get' to 'delete'
router.post('/put/:id', contactController.put);          // Corrected from 'post' to 'put'

module.exports = router;
