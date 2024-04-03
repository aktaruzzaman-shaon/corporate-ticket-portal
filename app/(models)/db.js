import mongoose from 'mongoose'

const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Mongodb connected successfully")
    } catch (error) {
        throw new Error("Error in connecting to mongodb")
    }
}

export default connectdb;