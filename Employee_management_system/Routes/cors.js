const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());  // Enable CORS for all routes

app.use(express.json());

app.post('/employees', (req, res) => {
    // Your code to handle the employee data
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
