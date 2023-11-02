// server.js
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const test_data = {
    test_data: 'sjlkfd33333333AAAA',
  }
    res.send(test_data);
});

app.get('/tests', (req, res) => {
    res.send("ESTA ES UNA URL PARA TEST! ");
});

app.get('/la_mierda_digo', (req, res) => {
    res.send("ESTA MIERDA NO ANDA!!! ");
});





app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`);
});

// Our DB Configuration
// require('./src/database');
require('./database');

const bodyParser = require('body-parser');

// Routes
// const postRouter = require('./src/routes/post.router');
const postRouter = require('./routes/post.router');

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.use('/posts', postRouter);

router = express.Router();

// will redirect all the non-api routes to react frontend
// router.use(function(req, res) {
    // res.sendFile(path.join(__dirname, '../client','build','index.html'));
// });
