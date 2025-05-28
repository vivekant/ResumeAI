import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    pdfurl: {
        type: String,
        unique: true,
    }
})


export const Data = mongoose.model("Data", dataSchema);