// server.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Configuración de CORS para permitir solicitudes desde cualquier origen
app.use(cors({ origin: "http://localhost" }));

app.get("/", (req, res) => {
  const test_data = {
    test_data: "sjlkfd33333333AAAA",
  };
  res.send(test_data);
});

app.get("/tests", (req, res) => {
  res.send("ESTA ES UNA URL PARA TEST! ");
});

app.get("/la_mierda_digo", (req, res) => {
  res.send("ESTA MIERDA NO ANDA!!! ");
});

app.listen(PORT, function () {
  console.log(`Server Listening on ${PORT}`);
});

// Our DB Configuration
// require('./src/database');
require("./database");

const bodyParser = require("body-parser");

// Routers
const postRouter = require("./routes/post.router");
const contactsRouter = require("./routes/contacts.rounter");

app.use(
  bodyParser.urlencoded({
    extended: true,
  }),
);
app.use(bodyParser.json());

// ROUTES
app.use("/posts", postRouter);
app.use("/contacts", contactsRouter);

router = express.Router();

// will redirect all the non-api routes to react frontend
// router.use(function(req, res) {
// res.sendFile(path.join(__dirname, '../client','build','index.html'));
// });
