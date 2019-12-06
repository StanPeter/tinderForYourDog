var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(path.join(__dirname)));
app.use("/public", express.static(__dirname));
app.use("/images", express.static(__dirname + '/images'));

// viewed at based directory http://localhost:8080/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + 'views/index.html'));
});



app.listen(process.env.PORT || 8080);
