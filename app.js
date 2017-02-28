var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var exphbs = require('express-handlebars');
var config = require("./config.js");
var crypto = require("crypto");
// view engine setup
app.set('views', path.join(__dirname, 'views'));
// var hbs = exphbs.create({
//   helpers: {
//     if: function(conditional, options) {
//       if (conditional) {
//         return options.fn(this);
//       } else {
//         return options.inverse(this);
//       }
//     }
//   }
// });
// app.engine("hbs", hbs.engine);
// app.set('view engine', 'hbs');

// app.engine('hbs', exphbs({
//     layoutsDir: "views",
//     defaultLayout: 'layout',
//     extname: '.hbs'
// }));
// app.set('view engine', 'hbs');

var hbs = exphbs.create({
    layoutsDir: "views",
    defaultLayout: 'layout',
    extname: '.hbs'
});
app.engine("hbs", hbs.engine);
app.set('view engine', 'hbs');

// uncomment after placing your favicon in /public
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

app.use(function(err,req,res,next){
   console.log(req.query);
   if(err=='ok'){
      var sha == crypto.createHash("sha1");
      sha.update(req.query.timestamp);
      sha.update(req.query.nonce);
      sha.update(config['token']);
      var rst = sha.digest().toString("hex");
      console.log("ok----"+(rst == req.query.signature));
      if(rst != req.query.signature){
         res.send(req.query.echostr);
      }else{
         res.send(req.query.echostr);
      }

   }else{
      next();
   }


})

app.use(function(req,res,next){
   console.log(req.query);
   var sha = crypto.createHash("sha1");
  if (req.query.hasOwnProperty("signature")) {
    sha.update(req.query.timestamp);
    sha.update(req.query.nonce);
    sha.update(config["token"]);
    var rst = sha.digest().toString("hex");
    console.log("no:" + (rst == req.query.signature));
    if (rst != req.query.signature) {
      res.send(req.query.echostr);
    } else {
      res.send(req.query.echostr);
    }
  } else {
    res.render("error");
  }
})

// app.use(function(req, res, next) {
//    console.log(req.query);
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });
//
// app.use(function(err, req, res, next) {
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
