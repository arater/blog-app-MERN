import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json({limit: '50mb', extended: true}));
app.use(express.urlencoded({limit: '50mb', extended: true}));

app.use(cors());

app.get('/', (req,res) => {
    res.json({
        Author: 'Arda Ersoy',
        Message: 'Initial Response'
    })
});

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = `mongodb+srv://arater:${process.env.DB_PASSWORD}@cluster0.ag2li.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,          //To remove warning massages
    useUnifiedTopology: true
})
.then(() => {
    app.listen(PORT, () => {
        console.log(`Server starts to listen on PORT: ${PORT}`);
    })
})
.catch((err) => {
    console.error(err);
})

