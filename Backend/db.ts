import mongoose from "mongoose";
const mongoURI = "mongodb://127.0.0.1:27017/PropReturns";
const ConnecttoMongoDB = () => {
  mongoose.connect(mongoURI).then(() => {
    console.log("MongoDB Connection Succesful!");
  });
};
module.exports = ConnecttoMongoDB;
