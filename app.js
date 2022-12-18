const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const app = express();
const PORT = process.env.PORT;

const studentRoutes = require("./routes/students.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Student ROUTE
app.use("/api/students", studentRoutes);

// Home Route
app.get("/", (req, res) => {
  res.status(200).json({
    message: "back home",
  });
});

// mongoose connection

mongoose.set("strictQuery", true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () =>
      console.log(`server running on : http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.log(`${error} did not connect`));
