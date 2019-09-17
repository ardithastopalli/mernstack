import mongoose from 'mongoose';
import User from './user';
import Pin from './pin';

const connectDb = () => {
    return mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
}

const models = {
    user: User,
    pin: Pin
}
export {
    connectDb
}

export default models;