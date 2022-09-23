const express = require("express");
const app = express();
require("../src/db/conn");

const MensRanking = require("../src/models/mens");

const port = process.env.PORT || 5000;

app.use(express.json());

//Creating new Mens
app.post("/mens", async (req, res) => {
  try {
    const addingMens = new MensRanking(req.body);
    const insertMens = await addingMens.save();
    res.status(201).send(insertMens);
  } catch (e) {
    res.status(400).send(`Something went wrong in AddingMens ${e}`);
  }
});

//Getting Mens
app.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({});
    res.send(getMens);
  } catch (e) {
    res.status(400).send(`Something went wrong in getMens ${e}`);
  }
});

//Updating Mens
app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.send(getMen);
  } catch (e) {
    res.status(500).send(`Something went wrong in getMens ${e}`);
  }
});

//Delete Mens
app.delete("/mens/:id", async (req, res) => {
  try {
    const getMen = await MensRanking.findByIdAndDelete(req.params.id);
    res.send(getMen);
  } catch (e) {
    res.status(500).send(`Something went wrong in getMens ${e}`);
  }
});

app.get("/", (req, res) => {
  res.send(`Hello from nodeJs server: ${port}`);
});

app.listen(port, () => {
  console.log(`Your server running on port: ${port}`);
});
