
var  store= require ('./store.js')

 
module.exports = {
  
 getPosts:(req, res)=>{
  
   res.send(store.postsArray)
  },
  addPost:(req, res)=> {
    let postsObj={}
     postsObj.name=req.body.name
     postsObj.url=req.body.url
     postsObj.Text=req.body.Text
     postsObj.comments[0].Text=''
    store.postsArray.push(postsObj)
    res.send(String(store.postsArray.toString()))
    
  
  },
  updatePost:function updatePost(req, res) {
    req.postId=req.params.postId
    index=parseInt(req.postId)
    let postsObj={}
    if(req.body.name)  { postsObj.name=req.body.name}
    if (req.body.url )  {postsObj.url=req.body.url}
    if (req.body.Text)   {postsObj.name=req.body.Text}
    
   store.postsArray[index]=postsObj
   res.send('Post was added successfully'+store.postsArray[index])
  },
 removePost:function removePost(req, res) {
     req.postId=parseInt(req.params.postId)
     index=req.postId
store.postsArray.splice(index)

  }
  

}