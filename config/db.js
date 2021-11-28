const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`database connected successfully`);
  } catch (error) {
    console.log(`database is failure ${error}`);
  }
};

module.exports = connectDB;
