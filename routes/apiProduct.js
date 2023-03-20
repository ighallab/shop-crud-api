const express = require('express');
const router = express.Router();

const productContorller = require('../controllers/productController');

//get All products
router.get('/',(req,res)=>{
    productContorller
    .getAllProducts()
    .then(result=>{

        result.length ?
            res.status(200).json({
                data:result,
                status: 200,
                message: "get all products..."
            })
        :
            res.status(404).json({
                data: null,
                status: 404,
                message: "no products found..."
            })
        ;

    }).catch(err=>{
        res.status(400).json({
            data: null,
            status: 400,
            message: err.message
        })
    })
})
//get single product
router.get('/:id',(req,res)=>{
    productContorller
    .getProduct(req.params)
    .then(result=>{

        result ?
            res.status(200).json({
                data:result,
                status:200,
                message:"get product ..."
            })
        :
            res.status(404).json({
                data: null,
                status: 404,
                message: "no product found..."
            })
        ;
    })
    .catch(err=>{
        res.status(400).json({
            data: null,
            status: 400,
            message: err.message
        })
    })
})
//create product
router.post('/',(req,res)=>{
    productContorller
    .createProduct(req.body)
    .then(result=>{
        res.status(200).json({
            data: result,
            status: 200,
            message: "product created successfully..."
        })
    })
    .catch(err=>{
        res.status(400).json({
            data: null,
            status: 400,
            message: err.message
        })
    })
})
//update product
router.put('/:id',(req,res)=>{
    productContorller
    .updateProduct(req.params,req.body)
    .then(result=>{
        
        result[0] ?
            res.status(200).json({
                data: result,
                status: 200,
                message: "product updated successfully"
            })
        :
            res.status(404).json({
                data: null,
                status: 404,
                message: "no product was found..."
            })
        ;
    })
    .catch(err=>{
        res.status(400).json({
            data: null,
            status:400,
            message: err.message
        })
    })
})
//delete product
router.delete('/:id',(req,res)=>{
    productContorller
    .deleteProduct(req.params)
    .then(result=>{
        
        result.length ?
            res.status(200).json({
                data: result,
                status: 200,
                message: "product deleted successfully"
            })
        :
            res.status(404).json({
                data: null,
                status: 404,
                message: "no product was found..."
            })
        ;
    })
    .catch(err=>{
        res.status(400).json({
            data: null,
            status:400,
            message: err.message
        })
    })
})
//get product with it's category 

//update product category

module.exports=router;