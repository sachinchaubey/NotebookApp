const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/";


// const connectToMongo = async() =>{
//     await mongoose.connect(mongoURI, () => {
//         console.log("connect to mongo successfully")
//     })
// }

const connectToMongo = async () => {
    try {
      await mongoose.connect(mongoURI);
      console.log('Connected to MongoDB');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
    }
  };

module.exports = connectToMongo