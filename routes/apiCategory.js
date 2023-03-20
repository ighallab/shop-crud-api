const express = require('express');
const router = express.Router();
//require category cotroller to deal with category table throw model 
const categoryConroller = require('../controllers/categoryController');


//get all category route endpoint
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

//create category route endpoint
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

//update single category route endpoint
router.put('/:id',(req,res)=>{
    categoryConroller
    .updateCategory(req.params,req.body)
    .then(result=>{

        result[0] ?
        res.status(200).json({
            data:null,
            status:200,
            message:"done updating category ..."
        })
        :
        res.status(404).json({
            data:null,
            status:404,
            message:"category Not Found..."
        })
    })
    .catch(err=>{
        res.status(400).json({
            data:null,
            status:400,
            message:err.message
        })
    })
})

//delete single category route enpoint
router.delete('/:id',(req,res)=>{
    categoryConroller
    .deleteCategory(req.params)
    .then(result=>{
        result ?
        res.status(200).json({
            data:result,
            status:200,
            message:"done Deleting category ..."
        })
        :
        res.status(404).json({
            data:null,
            status:404,
            message:"category not found..."
        });
    }).catch(err=>{
        res.status(400).json({
            data:null,
            status:400,
            message:err.message
        })
    })
})




//get all categories with their products endpoint
router.get('/product/all',(req,res)=>{
    categoryConroller
    .getAllCategoriesProducts()
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

//get single category with it's related products endpoint
router.get('/:id/product',(req,res)=>{
    categoryConroller
    .getSingleCategoryProduct(req.params)
    .then(result=>{
        res.status(200).json({
            data:result,
            status:200,
            message:"get category with it's products ..."
        })
    })
    .catch(err=>{
        res.status(400).json({
            data:null,
            status:400,
            message:err.message
        })
    })
})

//save a product for a spacific category 
router.post('/:id/product',(req,res)=>{
    categoryConroller
    .saveCategoryProduct(req.params,req.body)
    .then(result=>{
        res.status(200).json({
            data:result,
            status:200,
            message:"product saved successfully ..."
        })
    })
    .catch(err=>{
        res.status(400).json({
            data:null,
            status:400,
            message:err.message
        })
    })
})


module.exports = router;
