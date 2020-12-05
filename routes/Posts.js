const express = require('express')
const router = express.Router()
const mongoose = require('mongoose')
const Post = require('../models/Post');
const verify = require('./verifyToken');

router.get('/', verify ,async  (req, res) => {
    const posts = await Post.find().populate('postedBy', "_id name");
    res.send(posts);
})

router.get('/myposts', verify , async  (req, res) => {
    try{
        const myposts = await Post.find({postedBy : req.user._id}).populate('postedBy', "_id name");
        res.send({ status: true, posts:  myposts});

    }catch(err){
        res.status(404).send({ status : false, error :'Error Getting My Posts'})
    }
})

router.post('/create' , verify , async (req, res) => {
    const {title , body , photo } = req.body;
    console.log(title, body , photo);
    if(!title || !body || !photo){
        res.status(422).send({status : false, error : 'Please Send All Required Fields'});
    }
    req.user.password = undefined;
    try{
        const post = new Post({ title, body ,photo, postedBy : req.user });
        var savedRes = await post.save();
        res.send({status:true, post: savedRes});

    }catch(e){
        console.log('error',e);
        res.json({status : false, error : 'Error creating Posts'});
    }

})


module.exports = router
