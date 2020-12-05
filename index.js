const express = require("express");
const app = express();
const PORT = 5000;
const dotenv = require("dotenv");
const mongoose = require("mongoose");


dotenv.config();

app.use(express.json());

//Routes 
app.use('/api',require("./routes/Auth"));
app.use('/api/posts', require("./routes/Posts"));

//DB connect
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("connected to DB ");
  }
);

mongoose.connection.on("error", (e) => {
  console.log("Error connecting DB > ",e);
});

app.listen(PORT, () => {
  console.log("Server running at port " + PORT);
});
