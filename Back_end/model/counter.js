import { Schema, model } from "mongoose";

const dataSchema = new Schema({
    game: String,
    download: Number,
    type: String
}, {
    versionKey: false // menghilangkan __v di database mongodb
});

export const COUNT_ONE = model('Counter One Game', dataSchema);
export const COUNT_ALL = model('Counter All Game', dataSchema);