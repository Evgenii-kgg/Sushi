const express = require('express');
const path = require('path');
const methodOverride = require('method-override');
const session = require('express-session');
const bodyParser = require('body-parser');
const passport = require('passport');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth');
const product = require('./routes/products')
const order = require('./routes/order')
const category = require('./routes/category')
const db = require('./config/database');
const MongoClient = require("mongodb").MongoClient;
require('./config/passport')(passport);

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(db.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=> console.log('MongoDB Connected!'))
    .catch(err => console.log(err));

app.listen(port, ()=>{
    console.log(`Server started on port ${port}`);
});

app.use(require('cors')());
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

app.use('/api/product', product);
app.use('/api/product', category);
app.use('/api/order', order);
app.use('/api/auth', authRoutes);

