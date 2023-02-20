const express = require('express')
const router = express.Router();
const empController = require('../controller/empdata');

router.get('/getallData', empController.getAllData);
router.post('/post', empController.postData);
router.get('/get/:id', empController.getDataById);
router.put('/update/:id', empController.updateDataById);
router.delete('/delete/:id', empController.deleteDataById);

module.exports = router;
