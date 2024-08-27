import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // for parsing application/json

// Use the TODO routes
app.use(todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
