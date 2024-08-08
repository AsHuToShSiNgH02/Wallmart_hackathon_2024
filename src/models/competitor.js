import mongoose from "mongoose";

const competitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    }
}, {timestamps: true});

const Competitor = mongoose.model('Competitor', competitorSchema);
export default Competitor;