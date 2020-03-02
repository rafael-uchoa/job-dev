const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
require('dotenv').config({ path: './config/.env' });

connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/jobs'));

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Listening server on port ${PORT}`));
