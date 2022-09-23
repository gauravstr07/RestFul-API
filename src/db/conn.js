const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/olymics?directConnection=true", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connection-successful-to-database");
  })
  .catch((err) => {
    console.log(`Something went wrong in database -- ${err}`);
  });
