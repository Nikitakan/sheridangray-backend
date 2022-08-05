const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_LIVE_URL || "mongodb+srv://sheridangray:JSsf72SA27dzFui@cluster0.acn3fdt.mongodb.net/sheridangryDB?retryWrites=true&w=majority")

        console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Mongo Error: ${error.message}`)
        process.exit(1)
    }
}

exports = module.exports = connectDB