// Dependencies =======================
const User = require('../models/user');

// Select All =========================
exports.findAll = (req,res) => {
  User.find((err, user) => {
     if(err) return console.error(err);
     res.json(user);
  });
}

// Create =============================
exports.Create = (req, res) => {
  var user = new User(req.body);
  console.log('POST');
  console.log(user);
  user.save((err, user) => {
    console.log('Save User')
    if(err) return console.error(err);
    return res.json(user);
  });
};

// Select One =========================
exports.findById = (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if(err) return console.error(err);
    return res.json(user);
  });
};

// Update =============================
exports.Update = (req, res) => {
  User.findOneAndUpdate({_id: req.params.id}, req.body, (err) => {
    console.log('Update User');
    if(err) return console.error(err);
    res.sendStatus(200);
  })
};
  
// Delete by id ======================
exports.Delete = (req, res) => {
  User.findOneAndRemove({_id: req.params.id}, function(err) {
    console.log('Delete User');
    if(err) return console.error(err);
    res.sendStatus(200);
  });
};