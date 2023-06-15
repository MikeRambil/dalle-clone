import mongoose from 'mongoose';

const connectDB = (uri) => {
  mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((error) => {
      console.log('Failed to connect to MongoDB:', error);
    });
};

export default connectDB;
