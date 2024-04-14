const express = require("express");
const postRouter = express.Router();
const Post = require("../models/post.model"); // post model

// Import CRUD helpres.

/* Get all Posts */
postRouter.get("/", (req, res, next) => {
  Post.find({}, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      size: result.length,
      data: result,
    });
  });
});

/* Get Single Post */
postRouter.get("/:post_id", (req, res, next) => {
  Post.findById(req.params.post_id, function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      data: result,
    });
  });
});

// Creating one
postRouter.post("/", async (req, res) => {
  let newPost = {
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  };
  const post_a_crear = new Post(newPost);
  try {
    const NEWPOST = await post_a_crear.save();
    res.status(201).json(NEWPOST);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

/* Edit Single Post */
postRouter.patch("/:post_id", (req, res, next) => {
  let fieldsToUpdate = req.body;
  Post.findByIdAndUpdate(
    req.params.post_id,
    { $set: fieldsToUpdate },
    { new: true },
    function (err, result) {
      if (err) {
        res.status(400).send({
          success: false,
          error: err.message,
        });
      }
      res.status(200).send({
        success: true,
        data: result,
        message: "Post updated successfully",
      });
    },
  );
});

/* Delete Single Post */
postRouter.delete("/:post_id", async (req, res, next) => {
  // Get the post ID from the request parameters
  const postId = req.params.post_id;

  // Find the post by ID
  const post = await Post.findById(postId);

  // If the post does not exist, return a 404 error
  if (!post) {
    return res.status(404).json({ message: "Post not found" });
  }

  // Delete the post
  await post.delete();

  // Return a success response
  res.status(200).json({ message: "Post deleted successfully" });
});

//Get random N° of posts.
postRouter.get("/random_n_posts/:n", async (req, res, next) => {
  const limite = parseInt(req.params.n);

  Post.aggregate([{ $sample: { size: limite } }], function (err, result) {
    if (err) {
      res.status(400).send({
        success: false,
        error: err.message,
      });
    }
    res.status(200).send({
      success: true,
      size: result.length,
      data: result,
    });
  });
});

module.exports = postRouter;
