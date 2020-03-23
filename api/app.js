const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');

// Import Routers
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/auth.js');
const recipesRouter = require('./routes/recipes.js');
const usersRouter = require('./routes/users');

//  Express server

const app = express();
app.use(cors());

// Mongo
connectDB();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes Will Go Below
app.use('/api', indexRouter);
app.use('/api/recipes', recipesRouter);
app.use('/api/auth', loginRouter);
app.use('/api/users', usersRouter);

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

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
	console.log('Listening on port ' + app.get('port'));
});

module.exports = app;
