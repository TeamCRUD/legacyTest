// Dependencies =======================
const express = require('express');
const UserCtrl = require('../controllers/user');
const router = express.Router();

// /api/user/ API Page =================
router.route('/')
  .get(UserCtrl.findAll)
  .post(UserCtrl.Create)
  
// /api/user/:Id API Page ==============
router.route('/:id')
  .get(UserCtrl.findById)
  .put(UserCtrl.Update)
  .delete(UserCtrl.Delete)
  
// Router exports ======================
module.exports = router;