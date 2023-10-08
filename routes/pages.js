const express = require('express');
const router = express.Router()
const path = require('path');

router.get('/', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

router.get('/about', (req, res) =>{
    res.sendFile(path.join(__dirname, '../public', 'about.html'));
});

router.get('/immagine-esempio.png', (req, res) =>{
    res.sendFile(path.join(__dirname, '../images', 'immagine-esempio.png'));
});

module.exports = router;