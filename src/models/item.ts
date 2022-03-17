import mongoose from './index';

let db = mongoose.connection

interface Item {
    name: string,
    price: number,
    description?: string 
};

const schema = new mongoose.Schema<Item>({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: false
    }
});

const Item = mongoose.model<Item>('Item', schema)

export default Item