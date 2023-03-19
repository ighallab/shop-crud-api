const express = require('express');
const router = express.Router();

//require userContorller to interact with databas 
//and validate the requests body fields
const userController = require('../controllers/userContorller');

router.get('/',(req,res)=>{
   userController
      .getAllUser()
      .then(result=>{
         res.status(200).json({
            data: result,
            status :200,
            message: "got all data..."
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

router.get('/:id',(req,res)=>{
   userController
      .getUser(req.params)
      .then(result=>{
         res.status(200).json({
            data: result,
            status :200,
            message: "got user data..."
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
   userController
      .createUser(req.body)
      .then(result=>{
         res.status(200).json({
            data: result,
            status :200,
            message: " user created successfully..."
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

router.post('/:id/details',(req,res)=>{
   userController
      .saveUserDetails(req.params,req.body)
      .then(result=>{
         res.status(200).json({
            data: result,
            status :200,
            message: "got user data..."
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