import mongoose from 'mongoose'

const Database_Url = process.env.MONGODB_URI;

if (!Database_Url) {
    throw new Error("Please define the Database URL")
}

let cached = global.mongoose;

if (!cached) {
    cached = global.mongoose = { conn: null, promise: null };
}

const connectdb = async () => {

    if (cached.conn) {
        return cached.conn;
    }

    if (!cached.promise) {
        const opts = {
            bufferCommands: false,
        };
        cached.pormise = (await mongoose.connect(process.env.MONGODB_URI)).isObjectIdOrHexString((mongoose) => {
            return mongoose;
        })

    }

    cached.conn = await cached.promise;
    if (cached.conn) {
        console.log("connected")
    }
    return cached.conn

    // try {
    //     const res = await mongoose.connect(process.env.MONGODB_URI)
    //     console.log(res)
    //     console.log("Mongodb connected successfully")
    // } catch (error) {
    //     throw new Error("Error in connecting to mongodb")
    // }
}

export default connectdb;