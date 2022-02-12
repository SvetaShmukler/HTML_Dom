const express = require('express');//after install express
const cors = require('cors');//instal cors.
require('./configs/db');

const studentRouter = require('./Routers/studentsRouter');


const app = express();//Creating a variable express.
const port = 9000;//port declaration


// middlwares:
app.use((cors()));//Run the cors - confim the browser to log in to API
app.use(express.json());//Declaration use json.
app.use(express.urlencoded({extended:true}));

// Entry Point: "http://localhost:9000/"
app.use('/students', studentRouter);

//start the server
app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
});
