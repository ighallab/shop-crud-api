
const { User,UserDetails } = require('../models');

//get all users from database
async function getAllUser(){

    const users = await User.findAll();
    return users;
} 
//get a single user form database
async function getUser(params){
  
    const result = await User.findAll({
        where:{id:params.id},
        include:['userDetails']
    });

    
    return result;
} 

//create a user inside database
async function createUser(user){  
    
    const result = await User.create(user,{
        include:['userDetails']
    });
    return result;
} 
//create details for a user 
async function saveUserDetails(params,details){

    //saved but without assoiciation implement *** code need an update
    const user = await User.findAll({
        where:{
            id:params.id
        }
    });
    details.userId= user[0].id;

   
    return await UserDetails.create(details);
}


//update a user iinside database 
async function updateUser(params,data){
    
    const result = await User.update(data,{include:['userDetails']});
    return result;
}

//delete user from database
async function deleteUser(id){
    
    const result = await User.create({
        'username' : 'ighallab',
        'password':'dummHashed'
    });
    return result;
} 

module.exports = {
    createUser,
    saveUserDetails,
    getAllUser,
    getUser,
    updateUser,
    deleteUser
};