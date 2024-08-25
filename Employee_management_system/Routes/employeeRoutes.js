const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');


const dataFilePath = path.join(__dirname, '../data/employees.json');


router.get('/', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err); 
            return res.status(500).json({ error: 'Failed to read data.' });
        }
        res.json(JSON.parse(data));
    });
});


router.post('/', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err); 
            return res.status(500).json({ error: 'Failed to read data.' });
        }

        const employees = JSON.parse(data);
        employees.push(req.body);

        fs.writeFile(dataFilePath, JSON.stringify(employees, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err); 
                return res.status(500).json({ error: 'Failed to save data.' });
            }
            res.status(201).json(req.body);
        });
    });
});


router.delete('/:employeeId', (req, res) => {
    fs.readFile(dataFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);  
            return res.status(500).json({ error: 'Failed to read data.' });
        }

        let employees = JSON.parse(data);
        employees = employees.filter(emp => emp.employeeId !== req.params.employeeId);

        fs.writeFile(dataFilePath, JSON.stringify(employees, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err); 
                return res.status(500).json({ error: 'Failed to save data.' });
            }
            res.status(200).json({ message: 'Employee removed.' });
        });
    });
});

module.exports = router;
