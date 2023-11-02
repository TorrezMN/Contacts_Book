const express = require('express');
const postRouter = express.Router();
const Post = require('../models/post.model'); // post model



// Get all posts.
// postRouter.get('/', async (req,res)=>{
  // try {
    // const posts = await Post.find()
    // res.json(posts)
  // } catch (err) {
    // res.status(500).json({message:err.message})
  // }
// });


postRouter.get('/post_test', (req, res) => {
    res.send("POlllfkasdjflakjsdfñlkajsñdfljañsdlfkjañ TEST DE MIERDA!");
});


/* Get all Posts */
postRouter.get('/', (req, res, next) => {
    Post.find({} , function(err, result){
        if(err){
            res.status(400).send({
                'success': false,
                'error': err.message
            });
        }
        res.status(200).send({
            'success': true,
            'data': result
        });
    });
});

/* Get Single Post */
postRouter.get("/:post_id", (req, res, next) => {
    Post.findById(req.params.post_id, function (err, result) {
        if(err){
             res.status(400).send({
               success: false,
               error: err.message
             });
        }
        res.status(200).send({
            success: true,
            data: result
        });
     });
});


// Creating one
postRouter.post('/', async (req, res) => {
  let newPost = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author
  };
  const post_a_crear = new Post(newPost)
  try {
    const NEWPOST = await post_a_crear.save()
    res.status(201).json(NEWPOST)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})


/* Edit Single Post */
postRouter.patch("/:post_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Post.findByIdAndUpdate(req.params.post_id,{ $set: fieldsToUpdate }, { new: true },  function (err, result) {
      if(err){
          res.status(400).send({
             success: false,
            error: err.message
            });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "Post updated successfully"
        });
  });
});

/* Delete Single Post */
postRouter.delete("/:post_id", (req, res, next) => {
  Post.findByIdAndDelete(req.params.post_id, function(err, result){
      if(err){
        res.status(400).send({
         success: false,
          error: err.message
        });
      }
    res.status(200).send({
      success: true,
      data: result,
      message: "Post deleted successfully"
    });
  });
});

module.exports = postRouter; 
