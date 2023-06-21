const express = require('express');

const router = express.Router();
const controller = require('./controller');

router.get('/status', (req, res) => res.send('OK'));
router.route('/waiting-list').post(controller.waitingList);


module.exports = router;
