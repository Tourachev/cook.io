const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const indexRouter = require('./routes/index');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const Sequelize = require('sequelize');
let db = require('./models');

//  Express server
const app = express();
app.use(cors());
const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Black Magic on port ${port}`));

// MySql
// var db = mysql.createConnection({
// 	host: 'whyfourtytwo.mynetgear.com',
// 	port: 33006,
// 	user: 'cook',
// 	password: 'password',
// 	database: 'cookio-app'
// });

// db.connect(function(err) {
// 	if (err) throw err;
// 	console.log('Connected!');
// });

// Sequelize

// const sequelize = new Sequelize({
// 	host: 'whyfourtytwo.mynetgear.com',
// 	port: 33006,
// 	database: 'cookio-app',
// 	username: 'cook',
// 	password: 'password',
// 	dialect: 'mysql'
// });
// check the databse connection
// sequelize
// 	.authenticate()
// 	.then(() => console.log('Connection has been established successfully.'))
// 	.catch(err => console.error('Unable to connect to the database:', err));

db.sequelize.sync().then(function() {
	app.listen(PORT, function() {
		console.log(
			'==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
			PORT,
			PORT
		);
	});
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Routes Will Go Below
app.use('/', indexRouter);

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

module.exports = {app};
