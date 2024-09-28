import mongoose from 'mongoose'

const nortificationSchema = new mongoose.Schema({
    from:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    to:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    type:{
        type: String,
        required: true,
        enum: ['follow', 'like']
    },
    read:{
        type: Boolean,
        dafault: false
    }

},{timestamps : true}) ;

const Nortification = mongoose.model('Nortification',nortificationSchema) ;

export default Nortification ;