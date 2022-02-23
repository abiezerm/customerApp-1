const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');

//importing routes
const customerRoutes = require('./routes/customer');
const { urlencoded } = require('express');

//Settings

app.set('port', process.env.PORT || 3000 );
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


//Middlewares
app.use(morgan('dev'));
app.use(myConnection(mysql, {

    host: 'localhost',
    user: 'root',
    password: 'Password@123',
    port: '3306',
    database: 'companyCRUD'

},'single'));

app.use(express.urlencoded({extended: false}))

//routes
app.use('/', customerRoutes);

app.use(express.static(path.join(__dirname, 'public')));


app.listen(app.get('port'), () => {
    console.log('Server on port 3000');
});