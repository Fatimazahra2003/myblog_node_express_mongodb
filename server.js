require('dotenv').config();
let mongoose = require('mongoose')
let app = require("./app")

const port=process.env.PORT || 5000

app.set('view engine', 'pug');

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log(`MongoDB connected`))
    .catch((err) => console.log(err))

app.listen(port)