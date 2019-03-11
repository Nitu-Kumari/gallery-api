const express = require("express");
const Controller = require("./Controller");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const fileUpload = require('express-fileupload');
app.use(express.static('public'));


app.use(cors());
app.use(fileUpload());
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.get('/gallerys', Controller.getAllGallerys);
app.post('/gallerys', Controller.addGallery);
app.listen(7000, () => console.log('server started'));