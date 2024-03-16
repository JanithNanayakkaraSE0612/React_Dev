const express = require('express');
const Posts = require('../models/posts');
const posts = require('../models/posts');

const router = express.Router();

// Save Posts

router.post('/post/save',(req,res)=>{
    let newPost =  new Posts(req.body);

    newPost.save((err) =>{
        if(err){
            return res.status(400).json({
                error:err

            });
        }
        return res.status(200).json({
            succuess:"Posts saved successfully"
        });
    });
});

// get posts  

router.get('/post',(req,res)=>{
    posts.find().exec((err,posts)=>{
        if(err){
            return res.status(400).json({
                Error.err
            });
        }
        return res.status(200).json({
            succuess:true,
            existingPosts:posts
        });
    });
});

// update post

router.put('/post/update/:id',(req,res)=>{
    posts.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err,post)=>{
            if(err){
            return res.status(400).json({Error:err});
        }
        return res.status(200).json({succuess:'Update SuccessFully'});
    }
    )
});

module.exports = router;