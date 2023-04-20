const mongoose = require("mongoose")

uri = "mongodb+srv://lovesharma7670:love7670@cluster0.ssdvusi.mongodb.net/Income?retryWrites=true&w=majority"

const connectDB = async () => {
    console.log("mongodb connected");
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
    
};

module.exports = connectDB;