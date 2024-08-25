const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  

app.use(express.json());

app.post('/employees', (req, res) => {
   
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
