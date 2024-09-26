import mongoose from 'mongoose'

const nortificationSchema = ({
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
        type: string,
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