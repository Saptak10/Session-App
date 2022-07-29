const cookieParser = require('cookie-parser');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const DBAPI = 'mongodb://localhost:27017/SessionApp';

mongoose.connect(DBAPI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false})
    .then(() => {
        console.log("MongoDB connected")
    })
    .catch(err => {
        console.log("MongoDB connection error!!")
        console.log(err)
    })

const sessionRoutes = require('./routes/sessionRoute');
// const userRoutes = require('./routes/userRoute');
const paymentRoutes = require('./routes/paymentRoute');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// app.use('/', dashboardRoute)

app.use('/', sessionRoutes)
app.use('/api/payment/', paymentRoutes);
// app.use('/', userRoutes)

const port = 5000;

app.listen(port, () => {
  console.log(`Backend Server listening at http://localhost:${port}`)
})
