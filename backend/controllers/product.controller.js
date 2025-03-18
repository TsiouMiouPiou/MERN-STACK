import Product from "../models/product.model.js"

export const createProducts = async (req, res) => {
    const product = req.body; // user will send this data

    if(!product.name || !product.price || !product.image){
        return res.status(400).json({ success:false, msg: "Please fill all fields"});
    }

    const newProduct = new Product(product)   // This product comes from the product.js

    try {
        await newProduct.save();
        res.status(201).json({success:true, data: newProduct});
    } catch (error) {
        console.error("Error in create product:", error.message);
        res.status(500).json({ success:false, message: "Server Error" }) // 500 is an internal server error
    }
}

export const deleteProducts = async (req, res) => { // This id 
    const {id} = req.params     // Is this {id}
   
    try {
        await Product.findByIdAndDelete(id); // It checks the Product schema if this id exists and if yes then is deleted
        res.status(200).json({success: true, message: " Product deleted"});
    } catch (error) {
        console.log("Error in deleting product:", error.message);
        res.status(404).json({success: false, message: "Product not found"});
    }
}

export const getProducts = async (req, res) => {    
    try {
     const products = await Product.find({}); // the empty curly means that it returns all the products
        res.status(200).json({success: true, msg: "Here is all the products", data: products});
    } catch (error) {
        console.log("Error in fetching all the products:", error.message);
        res.status(404).json({success: false, msg: "Failed to GET prodcucts"});
    }
}

export const updateProducts = async (req, res) => {
    const { id } = req.params;
    const product = req.body;

    try {
        const updateProduct =  await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({ success: true, data: updateProduct });
    } catch (error) {
        console.log("Error to update the product:", error.message);
        res.status(404).json({ success: false, message: "Error to update the product" });
    }
}