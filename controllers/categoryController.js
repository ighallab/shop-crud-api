const { Category } = require('../models');

//get all categories
async function getAllCategroies(){
    const result = await Category.findAll();

    return result;
}
//get single category
async function getSingleCategory(params){
    const result = await Category.findOne({
        where:{
            id:params.id
        }
    });

    return result; 
}
//create a category 
async function createCategory(data){
    console.log(data)
    const result = await Category.create(data);

    return result ;
}

//update category
async function updateCategory(params,data){
    const result = await Category.update(data,{
        where:{
            id:params.id
        }
    })

    return result ;
}
//delete category
async function deleteCategory(params){
    const result = await Category.distroy({
        where:{
            id:params.id
        }
    })

    return result ;
}
//get all categpory with relation 

//get single category with it's products

//save product to a spacific category

module.exports={
    getAllCategroies,
    getSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory
};