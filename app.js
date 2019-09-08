const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


const PORT = 3000
const PUBLIC = "/public"

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname+PUBLIC+'/index.html'));
	//__dirname : It will resolve to your project folder.
});

app.get('/qldMap', function (req, res) {
	res.sendFile(path.join(__dirname+PUBLIC+'/ABS_data_MB_2011_QLD.html'));
	//__dirname : It will resolve to your project folder.
});

app.get('/favicon.ico', function (req, res) {
	res.sendFile(path.join(__dirname+PUBLIC+'/favicon.ico'));
	//__dirname : It will resolve to your project folder.
});

app.get('/MB_2011_QLD_exported.js', function (req, res) {
	res.sendFile(path.join(__dirname+PUBLIC+'/MB_2011_QLD_exported.js'));
	//__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);

app.listen(PORT, "0.0.0.0", function () {
  console.log('govhack2019.peerbanking.com.au listening on port '+PORT);
});
