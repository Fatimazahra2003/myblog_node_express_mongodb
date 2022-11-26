const express=require('express')
const router=express.Router()
const {getPosts,getPost,addPost,updatePost,editPost,deletePost}=require('../controllers/postController')

//add Post in database
router.post('/store',addPost)

//update post in database
router.get('/edit/:id',editPost)

router.get('/edit',editPost)

router.put('/update/:id', updatePost)

//show the home page
router.get('/',getPosts)

router.delete('/delete/:id', deletePost)

//show details
router.get('/detailPost/:id',getPost)


module.exports=router