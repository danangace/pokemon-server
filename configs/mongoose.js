const mongoose = require('mongoose')
const mongoUri = process.env.MONGO_URI

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
})
.then(_ => {
    console.log(`Success to connect database`)
})
.catch(err => {
    console.log(`Failed to connect databse`)
    console.log(err)
})

module.exports = mongoose