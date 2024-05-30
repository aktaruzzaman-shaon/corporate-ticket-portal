// import mongoose from 'mongoose'

import mongoose from "mongoose";

// const Database_Url = process.env.MONGODB_URI;

// if (!Database_Url) {
//     throw new Error("Please define the Database URL")
// }

// let cached = global.mongoose;

// if (!cached) {
//     cached = global.mongoose = { conn: null, promise: null };
// }

// const connectdb = async () => {

//     if (cached.conn) {
//         return cached.conn;
//     }

//     if (!cached.promise) {
//         const opts = {
//             bufferCommands: false,
//         };
//         cached.pormise = (await mongoose.connect(process.env.MONGODB_URI)).isObjectIdOrHexString((mongoose) => {
//             return mongoose;
//         })

//     }

//     cached.conn = await cached.promise;
//     if (cached.conn) {
//         console.log("connected")
//     }
//     return cached.conn
// }

// export default connectdb;

const connectdb = async () => {

    if (mongoose.connections[0].readyState) {
        return true
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Mongodb connected')
        return true
    } catch (err) {
        console.log(err)
    }
}

export default connectdb;