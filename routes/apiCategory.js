const express = require('express');
const router = express.Router();
//require category cotroller to deal with category table throw model 
const categoryConroller = require('../controllers/categoryController');



router.get('/',(req,res)=>{
    categoryConroller
    .getAllCategroies()
    .then(result=>{
        res.status(200).json({
            data:result,
            status:200,
            message:"get all categories ..."
        })
    })
    .catch(err=>{
        res.status(400).json({
            data:null,
            status:400,
            message:err.message
        })
    })
});

router.post('/',(req,res)=>{
    categoryConroller
    .createCategory(req.body)
    .then(result=>{
        res.status(200).json({
            data:result,
            status:200,
            message:"done creating category ..."
        })
    })
    .catch(err=>{
        res.status(400).json({
            data:null,
            status:400,
            message:err.message
        })
    })
});


module.exports = router;
