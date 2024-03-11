import { MongoClient } from 'mongodb'
const url = 'mongodb+srv://admin:qwe159@cluster0.h1wygya.mongodb.net/?retryWrites=true&w=majority'
const options = { useNewUrlParser: true }
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
    if (!(global as any)._mongo) {
        (global as any)._mongo = new MongoClient(url).connect()
    }
    connectDB = (global as any)._mongo
} else {
    connectDB = new MongoClient(url).connect()
}
export { connectDB }

