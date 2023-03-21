const { Product } = require('../models');

//get all products 
async function getAllProducts(){
    const result = await Product.findAll();
    return result;
}

//get single product 
async function getProduct(params){
    const result = await Product.findOne({
        where:{
            id: params.id
        }
    });

    return result 
}

//create a product
async function createProduct(data){
    const result = Product.create(data);

    return result;
}

//update a product 
async function updateProduct(params,data){
    const result = Product.update(data,{
        where:{
            id: params.id
        }
    });

    return result;
}

//delete a product
async function deleteProduct(params){
    const result = Product.destory({
        where:{
            id: params.id
        }
    })
}

//get product with it's category details
async function getProductCategory(params){
    const result = await Product.findOne({
        where:{
            id: params.id
        },
        include:['category']
    })

    return result ;

}

//get product and add a category to it 
async function addProductCategory(params,data){
    console.log(data)
    const result = await Product.findOne({
        where:{
            id: params.id
        },
        include:['category']
    }).then(product=>{
        return product.setCategory(data.categoryId);
    });

    return result;
}


module.exports={
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductCategory,
    addProductCategory

};