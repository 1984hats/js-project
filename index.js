let express = require('express');
let app = express();
let ejs = require('ejs');
const haikus = require('./haikus.json');
const port = process.env.PORT || 3000;
const url = 'http://locahost'|| process.env.stagingURL || process.env.prodURL
app.locals.octicons = require("@primer/octicons");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'))
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', {haikus: haikus});
});

app.listen(port);

console.log(`Server running on ${url}:${port}`);