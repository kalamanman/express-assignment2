const express = require ('express')

//  [{name:"name",usl:"url,Text:"text",comments:------>comments[]---->[{},{},commentObj<------{}]]-----> postsArray


let postObject={}
let commentObj={}
commentObj.Text=''
postObject.name=''
postObject.url= ''
postObject.Text=''
postObject.comments=[]
postObject.comments.push(commentObj)
var postsArray=[]
postsArray.push(postObject)

module.exports={
postsArray,
postObject
}
