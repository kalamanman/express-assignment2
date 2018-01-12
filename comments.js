

var express =require('express')
var  store= require ('./store.js')




module.exports = {
  getComments(req, res) {
    req.postId =req.params.postId
     index=parseInt(req.postId)
    res.json(store.postsArray[index].comments)
       
  }, 
  addComment(req, res) {
   let temObj={}
   req.postId =req.params.postId
   let index=parseInt(req.postId)
   temObj.Text =req.body.Text
   store.postsArray[index].comments.push(temObj)
   res.send('comment added') 
  },
  updateComment(req, res) {
    
    req.postId =parseInt(req.params.postId)
    req.commentId =parseInt((req.params.postId))
    let index=req.postId
    temObj.Text =req.body.Text
    store.postsArray[index].comments[req.commentId].Text=req.body.Text
  res.send('comment updated')
  },
  removeComment(req, res) {
      req.postId=parseInt(req.params.postsId)
      req.commentId =parseInt((req.params.postId))
      let index=req.postId
      store.postsArray[index].comments.splice(req.commentId)
  }  
}
