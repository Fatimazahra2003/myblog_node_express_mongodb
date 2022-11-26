const pug = require('pug');
const Post=require("../models/postModel")



async function getPosts(req,res){
    const posts=await Post.find()
    res.render('index',{posts:posts})}

async function getPost(req,res){

    const found=await Post.findById(req.params.id)
    res.render('detailpost',{found:found})
   // console.log(found);
}

async function addPost(req,res){
    let p=new Post({
        titre:req.body.titre,
        auteur:req.body.auteur,
        resume:req.body.resume,
        contenu:req.body.contenu
    })
    try{
        await p.save()
        console.log('Post added in the database')
        res.redirect('/')
    }catch(err){console.log(err)}
}



async function updatePost(req,res){
    try{
        const found=await Post.findByIdAndUpdate(req.params.id,req.body)
        res.status(200).redirect('/')
    }catch(err){
        console.log(err)
    }
    // try{
    // const {titre,auteur,resume,content}=req.body
    // Post.updateOne({_id:req.params.id},{titre,auteur,resume,content},(err,res)=>{
    //     if(err) console.log(err);
       
    // })
    // res.send('Post updated')}
    // catch(err){
    //     console.log(err)
    // }
    
}

async function deletePost(req,res){
    try {
        
        await Post.findByIdAndDelete(req.params.id)
    } catch (error) {
        console.log(error);
    }
   res.redirect('/')

}

async function editPost(req,res){

    const post=await Post.findById(req.params.id)
    res.render('editpost',{post: post ?? new Post()})
}

module.exports={getPosts,getPost,addPost,updatePost,editPost,deletePost}