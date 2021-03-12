const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const app = express();
const port = process.env.PORT || 3000;

const users = require('./routes/users');
const product = require('./routes/products')
const order = require('./routes/order')

// require('./config/passport')(passport);
const db = require('./config/database');

mongoose.Promise = global.Promise;
mongoose.connect(db.mongoURI, {
    useNewUrlParser: true
})
    .then(()=> console.log('MongoDB Connected!'))
    .catch(err => console.log(err));

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use(methodOverride('_method'));

app.use(session({
    secret: 'key',
    resave: true,
    saveUninitialized: true,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/product', product);
app.use('/api/order', order);
app.use('/users', users);

