const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect("******confidential", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });
    console.log(`MongoDB connected:`);
  } catch (error) {
    console(`Error : ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
