// Dependencies =======================
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Configuration ======================
var userSchema = new Schema({
  fullname: String,
  email: String,
  school: String,
  username: String,
  password: String
});

// Conexion ===========================
mongoose.connect("mongodb://jairperezs:D1e560*9c@ds117929.mlab.com:17929/ps-old",(err,res)=>{
  if(err) console.log('ERROR: Conectando DB:'+ err);
  else console.log('Connect DB ps_user');
});

mongoose.Promise = global.Promise;

// Exports ============================
const User = mongoose.model('User', userSchema);
module.exports = User;