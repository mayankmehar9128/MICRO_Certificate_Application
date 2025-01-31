const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const StudentGetAllRoute = require('./Routes/StudentGetAllRoute');
const StudentAddRoute = require('./Routes/StudentAddRoute');
const StudentUpdateRoute = require('./Routes/StudentUpdateRoute');
const StudentDeleteRoute = require('./Routes/StudentDeleteRoute');
const FrenchiseAproveRoute = require('./Routes/FrenchiseAproveRoute');
const FrenchiseDeleteRoute = require('./Routes/FrenchiseDeleteRoute');
const FrenchiseGetRoute = require('./Routes/FrenchiseGetRoute');
const FrenchiseUpdateRoute = require('./Routes/FrenchiseUpdateRoute');
const FrenchiseRegisterRoute = require('./Routes/FrenchiseRegisterRoute');
require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth/api', AuthRouter);
app.use('/students/api', StudentGetAllRoute);   // GET requests
app.use('/students/api', StudentAddRoute);   // POST requests
app.use('/students/api', StudentUpdateRoute); // PUT requests
app.use('/students/api', StudentDeleteRoute); // DELETE requests
app.use('/frenchises/api', FrenchiseAproveRoute); // DELETE requests
app.use('/frenchises/api', FrenchiseDeleteRoute); // DELETE requests
app.use('/frenchises/api', FrenchiseGetRoute); // DELETE requests
app.use('/frenchises/api', FrenchiseUpdateRoute); // DELETE requests
app.use('/frenchises/api', FrenchiseRegisterRoute); // DELETE requests

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
});