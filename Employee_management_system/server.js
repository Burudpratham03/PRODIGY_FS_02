const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const employeeRoutes = require('./routes/employeeRoute'); 

app.use(cors());  
app.use(express.json());  


app.use(express.static(path.join(__dirname, 'public')));


app.use('/employees', employeeRoutes);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});

app.listen(5000, () => {
    console.log('Server is running on http://localhost:5000');
});
