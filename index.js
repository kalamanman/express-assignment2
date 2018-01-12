const express  =  require('express')
const     api =express.Router()
const  postsRoute =require ('./posts.js')
const   commentsRoute= require('./comments.js')
var     store = require ('./store.js')


//router.param([postId,(req,res,next,postIndex)=>{
//if(error) return next (error (new error('OOOOOOOOPs something went wrong'))
api.get('/',(req,res)=>{

    res.redirect(301,'/posts')
})
api.get('/posts',postsRoute.getPosts)
api.post('/posts',postsRoute.addPost)
api.put('/posts/:postId',postsRoute.updatePost)
api.delete('/posts/:postId',postsRoute.removePost)
api.get('/posts/:postId/comments',commentsRoute.getComments)
api.post('/posts/:postId/comments',commentsRoute.addComment)
api.put('/posts/:postId/comments/:commentId',commentsRoute.updateComment)
api.delete('/posts/:postId/comments/commentId',commentsRoute.removeComment)

api.use((req,res,next)=>{
    res.send('<h1 center color:red>status 404</br>Page not found</h1>')
    next()
})

  

 





module.exports=api












