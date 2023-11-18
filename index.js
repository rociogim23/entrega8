const express = require('express');
const path = require ('path');
const jwt= require('jsonwebtoken');
const mariadb = require('mariadb');

const app = express();
const port = 3000;

const dataFolderPath = path.join(__dirname);
//punto 1 entrega 8 
//rutas para servir los archivos json 

app.get('/cats/:id', (req,res)=>{
    const catsId = req.params.id;
    const filePath = path.join(dataFolderPath, 'cat', `${catsId}.json`);
    res.sendFile(filePath);
});

app.get('/cart/:id', (req,res)=>{
    const cartId = req.params.id;
    const filePath = path.join(dataFolderPath, 'cart', `${cartId}.json`);
    res.sendFile(filePath);
});

app.get('/cats_products/:id', (req,res)=>{
    const cats_productsId = req.params.id;
    const filePath = path.join(dataFolderPath, 'cats_products', `${cats_productsId}.json`);
    res.sendFile(filePath);
});
app.get('/products/:id', (req,res)=>{
    const productsId = req.params.id;
    const filePath = path.join(dataFolderPath, 'products', `${productsId}.json`);
    res.sendFile(filePath);
});
app.get('/products_comments/:id', (req,res)=>{
    const products_commentsId = req.params.id;
    const filePath = path.join(dataFolderPath, 'products_comments', `${products_commentsId}.json`);
    res.sendFile(filePath);
});

app.get('/sell/:id', (req,res)=>{
    const sellId = req.params.id;
    const filePath = path.join(dataFolderPath, 'sell', `${sellId}.json`);
    res.sendFile(filePath);
});

app.get('/user_cart/:id',(req,res)=>{
    const user_cartId = req.params.id;
    const filePath = path.join(dataFolderPath, 'user_cart', `${user_cartId}.json`);
    res.sendFile(filePath);
});

app.listen(port, () =>{
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
