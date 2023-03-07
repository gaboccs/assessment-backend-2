const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

const { getCompliment, getFortuneCookie, getLuckyCat, getPet } = require('./controller')

app.get("/api/compliment", getCompliment);
app.get("/api/fortuneCookie", getFortuneCookie);
app.get("/api/luckyCat", getLuckyCat);

app.listen(4000, () => console.log("Server running on 4000"));
