import express from 'express';
import cors from 'cors';

import { getClients } from './Controllers/clientController.js'
import { getProducts, createProduct, updateProduct, deleteProduct } from './Controllers/productController.js'
import { getCategories, getCategory, createCategory, updateCategory, deleteCategory } from './Controllers/categoryController.js'
import { getBrands, createBrand, updateBrand, deleteBrand } from './Controllers/brandController.js'

const app = express();
app.use(cors());
app.use(express.json());

// app.get('/clientes', getClients);

app.get('/productos', getProducts);
app.post('/productos', createProduct);
app.put('/productos', updateProduct);
app.delete('/productos:id', deleteProduct);

app.get('/categorias', getCategories);
app.get('/categorias:id', getCategory);
app.post('/categorias', createCategory);
app.put('/categorias', updateCategory);
app.delete('/categorias:id', deleteCategory);

app.get('/lineas', getBrands);
app.post('/lineas', createBrand);
app.put('/lineas', updateBrand);
app.delete('/lineas:id', deleteBrand);

app.listen(3001, ()=>{
    console.log('SERVER UP runnig in http://localhost:3001');
});


