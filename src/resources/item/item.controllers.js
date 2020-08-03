import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'
import { connect } from '../../utils/db';
import mongoose from 'mongoose';

const run = async () => {
    await connect('mongodb://localhost:27017/api-test');
    const item = await Item.create({
        name: 'Clean up',
        createdBy: mongoose.Types.ObjectId(),
        list: mongoose.Types.ObjectId(),
    });

    console.log(item);
};

run();

export default crudControllers(Item)
