var express = require('express'),
	app = express(),
	bodyParser = require('body-parser');

const PORT = 3000;

app.use(express.static(__dirname + '/app/public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

require("./app/routing/routes")(app);

app.listen(PORT);
