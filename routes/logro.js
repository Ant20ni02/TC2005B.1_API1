const express = require('express');
const router = express.Router();
const logroController = require('../controller/logro.controller');

const middleware = express.Router();//require('../middleware/jwt-middleware.js');


router.get('/logros',middleware, logroController.getLogros);
router.get('/logro/:id', middleware,logroController.getLogro);
router.post('/logro', middleware,logroController.insertLogro);
router.put('/logro', middleware,logroController.updateLogro);
router.delete('/logro/:id', middleware,logroController.deleteLogro);

module.exports = router;