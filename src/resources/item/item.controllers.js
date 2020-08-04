import {
    crudControllers
} from '../../utils/crud'
import {
    Item
} from './item.model'
import {
    connect
} from '../../utils/db';
import mongoose from 'mongoose';

const run = async () => {
    await connect('mongodb://localhost:27017/api-test');

    const item = await Item.create({
        name: 'Clean up',
        createdBy: mongoose.Types.ObjectId(),
        list: mongoose.Types.ObjectId(),
    });

    const updated = Item.findByIdAndUpdate(item._id, {
        name: 'eat'
    }, {
        new: true
    }).exec();

    const deleted = Item.findByIdAndDelete(item._id).exec();

    console.log(await updated);
    console.log(await deleted);
    console.log(await Item.findById(item._id));
};

run();

export default crudControllers(Item)