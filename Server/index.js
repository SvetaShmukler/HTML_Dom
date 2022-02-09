const express = require('express');
const cors = require('cors');
require('./configs/db');

const studentRouter = require('./Routers/studentsRouter')


const app = express();
const port = 9000;

app.use((cors()));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/students', studentRouter)


app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
})
