const express = require('express');
const router = express.Router();

//require userContorller to interact with databas 
//and validate the requests body fields
const userController = require('../controllers/userContorller');


//get all users endpoint
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

//get a single user end point
router.get('/:id',(req,res)=>{

   userController
      .getUser(req.params)
      .then(result=>{
         //condition for checking if we had a user with that id or not 
         result.length ?
            res.status(200).json({
               data: result,
               status :200,
               message: "got user data..."
            })
            :
            res.status(404).json({
               data: null,
               status :404,
               message: "no user found ..."
            });
         
         
      })
      .catch(err=>{
         res.status(400).json({
            data:null,
            status:400,
            message:err.message
         })
      })
});

//create a user end point
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

//update user endpoint
router.put('/:id',(req,res)=>{
   userController
      .updateUser(req.params,req.body)
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
//delete user endpoint 
router.delete('/:id/details',(req,res)=>{
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



//get all users with it's details
router.get('/details/all',(req,res)=>{
   userController
      .getAllUserWithDetails()
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
})

//get single user with it's details
router.get('/:id/details',(req,res)=>{

   userController
      .getUserDetails(req.params)
      .then(result=>{
         //condition for checking if we had a user with that id or not 
         result.length ?
            res.status(200).json({
               data: result,
               status :200,
               message: "got user data..."
            })
            :
            res.status(404).json({
               data: null,
               status :404,
               message: "no user found ..."
            });
         
         
      })
      .catch(err=>{
         res.status(400).json({
            data:null,
            status:400,
            message:err.message
         })
      })
});

//save a  new user details endpoint 
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

//update user details endpoint
router.put('/:id/details',(req,res)=>{
   userController
      .updateUserDetails(req.params,req.body)
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