require('dotenv').config()
const express = require('express');
const path = require('path');
const app = express()
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.get('/show', (req,res)=>{
     const episode = 'Seven';
     res.render('show')
})

app.listen(port, ()=>{
     console.log(`Server is listening for requests on port ${port}`);
})