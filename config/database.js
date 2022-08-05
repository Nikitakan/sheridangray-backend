const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/sheridangryDB")

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Mongo Error: ${error.message}`)
        process.exit(1)
    }
}

exports = module.exports = connectDB
