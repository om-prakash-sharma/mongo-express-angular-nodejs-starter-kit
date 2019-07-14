/**
 * Created by OmPrakashSharma on 11-07-2018.
 */
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');
var config = require('./config/config');
var fss = require('fs-extra')
var path = require('path');
var port = config.PORT;

var http = require('http').Server(app);

app.set('port', port);
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.get('/ok' , function(req , res){


    fs.readdirSync(path.join(__dirname +  "/FLATFILES/**/02_Zeichnungen_3D_Daten")).forEach(file => {
        console.log(file);
});
    // fss.move('E:/nodeJs/Node-Express/FLATFILES/', '/FLATFILES/../02_Zeichnungen_3D_Daten/Nicht_zugeordnet/*.*', function (err) {
    //     if (err) return console.error(err)
    //     console.log("success!")
    // })

});

http.listen(port, function () {
    console.log('Server is listening on *:' + port);
});