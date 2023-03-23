const { Category } = require('../models');
const validateCategory = require('./validator/validateCategoryRequest');

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
    const { error } = validateCategory.validateCategory(data);
    if(error){
        return Promise.reject(new Error(error));
    }

    const result = await Category.create(data);
    return result ;
}

//update category
async function updateCategory(params,data){
    
    const { error } = validateCategory.validateCategoryGeneral(data)
    if(error){
        return Promise.reject(error)
    }
    
    const result = await Category.update(data,{
        where:{
            id:params.id
        }
    });

    return result ;
}

//delete category
async function deleteCategory(params){
    const result = await Category.destroy({
        where:{
            id:params.id
        }
    })

    return result ;
}




//get all categpory with relation 
async function getAllCategoriesProducts(){
    const result = Category.findAll({
        include:['products']
    });
    
    return result;
}

//get single category with it's products
async function getSingleCategoryProduct(params){
    const result = Category.findOne({
        where:{
            id: params.id
        },
        include:['products']
    })

    return result;
}

//save product to a spacific category
async function saveCategoryProduct(params,data){
    const {error} = validateCategory.validateCategoryProductRequest(data);
    if(error){
        return Promise.reject(new Error(error))
    }
    const result = Category.findOne({
        where:{
            id: params.id
        },
        include:['products']

    }).createProduct(data);

    return result;
}

module.exports={
    getAllCategroies,
    getSingleCategory,
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategoriesProducts,
    getSingleCategoryProduct,
    saveCategoryProduct
};