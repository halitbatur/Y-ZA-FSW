const mongoose = require("mongoose");
const uri = "mongodb://root:example@localhost:27017/mongo?authSource=admin";

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

async function connectDB() {
  console.log("Connecting...", uri);
  try {
    await mongoose.connect(uri, clientOptions);
    await mongoose.connection.db.admin().command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = connectDB;
