var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
import cors from 'cors'

var mongoose = require('mongoose');

let mongoDB = 'mongodb://mongo:27017/auth';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('DB Connected!'))
    .catch((err: any) => {
        console.log(Error, err.message);
    });
mongoose.Promise = global.Promise
let db = mongoose.connection

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;
