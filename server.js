const app = require("./app");
const mongoose = require("mongoose");

const { DB_HOST } = process.env;
const PORT = process.env.PORT || 3000;

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(PORT, () => {
      console.log("Database connection successful");
    });
  })
  .catch((error) => {
    console.log(error.messsage);
    process.exit(1);
  });
