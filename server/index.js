import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';
import connectDB from './mongodb/connect.js';

const app = express();

//--MIDDLEWARES
app.use(cors());
app.use(express.json({ limit: '50mb' }));

//--RouteWARE
app.get('/', async (req, res) => {
  res.send('Hello from Dalle-E');
});
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

//--Server Running
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => {
      console.log('Server running on PORT 8080');
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
