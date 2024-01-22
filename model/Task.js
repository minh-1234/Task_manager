const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [true, "must provide name"],
        trim: true,
        maxlength: [20, "you can not be more than 20 characters"],
    },
    complete: {
        type: Boolean,
        default: false,
    }
});
module.exports = mongoose.model('Task', TaskSchema);