
const { User,UserDetails } = require('../models');
const validatUserRequestGeneral = require('./validator/validateUserRequest');

//get all users from database
async function getAllUser(){

    const users = await User.findAll();
    return users;
}

//get a single user form database
async function getUser(params){
    
    const { error } = validatUserRequestGeneral.validatUserRequestGeneral(params);
    if(error){
        return Promise.reject(new Error(error));
    }
    const result = await User.findAll({
        where:{id:params.id}
    });

    return result;
} 

//create a user inside database with it's details if had 
async function createUser(user){  
        
    const { error } = validatUserRequestGeneral.validatUserRequestGeneral(user);
    if(error){
        return Promise.reject(new Error(error));
    }
    
    const result = await User.create(user,{
        include:['userDetails']
    });
    return result;
}

//update a user iinside database 
async function updateUser(params,data){

    const { error } = validatUserRequestGeneral.validatUserRequestGeneral(data);
    if(error){
        return Promise.reject(new Error(error));
    }

    const result = await User.update(data,{
        where:{
            id:params.id
        },
        include:['userDetails']
    });
    return result;
}

//delete user from database
async function deleteUser(id){
    const { error } = validatUserRequestGeneral.validatUserRequestGeneral({id:id});
    if(error){
        return Promise.reject(new Error(error));
    }
    const result = await User.destroy({
        where:{id:id}
    });
    return result;
} 

//get all users from database with relation
async function getAllUserWithDetails(){

    const users = await User.findAll({include:['userDetails']});
    return users;
}

//get single user with relation
async function getUserDetails(params){
    
    const { error } = validatUserRequestGeneral.validatUserRequestGeneral(params);
    if(error){
        return Promise.reject(new Error(error));
    }
    const result = await User.findAll({
        where:{id:params.id},
        include:['userDetails']
    });

    return result;
} 
//create details for a user 
async function saveUserDetails(params,details){
    
    const { error } = validatUserRequestGeneral.validatUserRequestGeneral(details);
    if(error){
        return Promise.reject(new Error(error));
    }
    //saved but without assoiciation implement *** code need an update
    const user = await User.findAll({
        where:{
            id:params.id
        }
    });
    details.userId= user[0].id;

   
    return await UserDetails.create(details);
}

module.exports = {
    createUser,
    saveUserDetails,
    getAllUser,
    getUser,
    updateUser,
    deleteUser,
    getAllUserWithDetails,
    getUserDetails,
};