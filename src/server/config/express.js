// Dependencies =======================
const express = require('express')
const morgan = require('morgan'); // logger
const bodyParser = require('body-parser');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const routes  = require('../routes/index');
const app = express();

// Configuration ======================
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', express.static(__dirname + '/../../public'));
app.use('/scripts', express.static(__dirname + '/../../../node_modules'));
app.use('/bundle', express.static(__dirname + '/../../public/build/bundle'));
app.use('/app', express.static(__dirname + '/../../app'));
app.use('/img', express.static(__dirname + '/../../public/build/img'));
app.use('/media', express.static(__dirname + '/../../public/build/media'));
app.use(compress());
app.use(helmet());
app.use(cors());

// Database ============================
    
// Routes =============================
app.use('/api', routes);
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/../../public/index.html');
});

// Listen =============================
var env = process.env;
app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', () =>{
  console.log(`Application worker ${process.pid} started...`);
});

//App export =========================
module.exports = app;