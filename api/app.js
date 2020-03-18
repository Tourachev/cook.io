const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

// Routers
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/auth.js');
const recipesRouter = require('./routes/recipes.js');
const signUpRouter = require('./routes/signup');
//  Express server
const PORT = process.env.PORT || 3001;

const app = express();
app.use(cors());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes Will Go Below
app.use('/signup', signUpRouter);
app.use('/recipes', recipesRouter);
app.use('/auth', loginRouter);
app.use('/index', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(PORT, function() {
	console.log('🌎  Listening on port %s.', PORT);
});

module.exports = app;
