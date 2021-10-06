const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { mongo_uri } = require('./config');
const app = express();


// Routes
const postRoutes = require('./routes/api');

app.use(cors());
app.use(express.json());

mongoose.connect(mongo_uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("MongoDB connected");
}).catch(err => console.log(err));


app.get("/", (req, res) => {
    console.log("working");
});

app.use("/api/happyfood", postRoutes);

const port = process.env.port || 3000;

app.listen(port, () => {
    console.log(`Server working at port ${port}`);
});