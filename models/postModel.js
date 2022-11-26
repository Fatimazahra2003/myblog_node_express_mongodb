const mongoose=require('mongoose')

const postSchema=mongoose.Schema({

    titre:{type:String,
           required:[true,'Please enter the title'],
           required:true,
           ref:'User'
           },
    auteur:{
        type:String,
        required:true
    },
    resume:{
        type:String,
        required:true
    },
    contenu:{
        type:String,
        required:true},
    // image:{
    //     type:Image
    // }
}, {timestamps:true})

module.exports=mongoose.model('Post',postSchema)