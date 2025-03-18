import express from 'express';
import { createProducts, deleteProducts, getProducts, updateProducts } from '../controllers/product.controller.js';
const router = express.Router()

// ALL THE ENDPOINT OR ROUTES ARE HERE
router.get('/', getProducts);
router.post('/', createProducts);
router.delete('/:id', deleteProducts);
router.put('/:id', updateProducts);


// router.get.post(getProducts, postProducts); 
// router.delete.post(deleteProducts, putProducts);

export default router;
