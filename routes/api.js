const express = require('express');
const router = express.Router();

// Post Model
const Posts = require('../model/Posts');





// GET /:id
router.get('/:id', async (req, res) => {
    try {
        const post = await Posts.findById(req.params.id);
        if (!post) throw Error("Didn't find your request item");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});



// GET
router.get('/', async (req, res) => {
    try {
        const post = await Posts.find();
        if (!post) throw Error("No items found");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});



// POST
router.post('/', async (req, res) => {
    const newPost = new Posts(req.body);
    try {
        const post = await newPost.save();
        if (!post) throw Error("Something went wrong while saving the post.");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});


// DELETE
router.delete('/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndDelete(req.params.id);
        if (!post) throw Error("No post has been deleted");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err });
    }
});



// UPDATE
router.patch('/:id', async (req, res) => {
    try {
        const post = await Posts.findByIdAndUpdate();
        if (!post) throw Err("No post has been updated");

        res.status(200).json(post);
    } catch (err) {
        res.status(400).json({ msg: err});
    }
});


module.exports = router;
