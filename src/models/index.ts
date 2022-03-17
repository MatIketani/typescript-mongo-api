import mongoose from 'mongoose';

mongoose.connect(`${process.env.DB}/${process.env.MONGODB_HOST}`);
mongoose.Promise = global.Promise

export default mongoose