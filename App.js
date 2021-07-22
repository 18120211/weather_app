const express = require('express');
const app = express();
const Datastore = require('nedb');
const fs = require('fs');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
require('dotenv').config();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({
    limit: '100kb'
}));

const db = new Datastore({ filename: './public/data/log.db' });

db.loadDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT, console.log(`Server running on port ${3000}`));

app.post('/weaInfor', async (req, res) => {
    const WEA_API = process.env.WEA_API.toString();
    const latlng = req.body;
    const lat = latlng.lat.toString();
    const lng = latlng.lng.toString();
    const wea_url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${WEA_API}&lang=vi`;
    const raw_data = await fetch(wea_url);
    const wea_infor = await raw_data.json();
    res.json(wea_infor);

    const name = wea_infor.name;
    let description = wea_infor.weather[0].description;
    const temp = wea_infor.main.temp;
    const press = wea_infor.main.pressure;
    const hum = wea_infor.main.humidity;
    const icon = wea_infor.weather[0].icon +'@2x.png';
    const firstChar = description[0].toUpperCase();
    description = firstChar + description.substring(1, description.length);
    const data = {
        name: name,
        desc: description,
        temp: temp,
        press: press,
        icon: icon,
        date: new Date()
    }
    db.insert(data); 
});