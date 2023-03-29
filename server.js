const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(express.json());

const products = JSON.parse(fs.readFileSync('./products.json', 'utf8'));

// Gives you all the products
app.get('/fakestore', (req, res) => {
    return res.status(200).json(products);
});

// Gives you a specific product
app.get('/fakestore/:id', (req, res) => {
    const id = parseInt(req.params.id, 10);
    if (id > 0) {
        const product = products.find(p => p.id === id);
        if (product) {
            return res.json(product);
        } else {
            return res.status(404).json({ error: 'Product not found' });
        }
    } else {
        return res.status(400).json({ error: 'Invalid product ID' });
    }
});

// Gives you a specific value of a product
app.get('/fakestore/:id/:value', (req, res) => {
    const id = parseInt(req.params.id, 10);
    const value = req.params.value;
    if (id > 0) {
        const product = products.find(p => p.id === id);
        if (product) {
            if (product.hasOwnProperty(value)) {
                return res.json({ [value]: product[value] });
            } else {
                return res.status(404).json({ error: 'Category not found' });
            }
        } else {
            return res.status(404).json({ error: 'Product not found' });
        }
    } else {
        return res.status(400).json({ error: 'Invalid product ID' });
    }
});

// Gives you all the products of a specific category
app.get('/fakestore/category/:category', (req, res) => {
    const category = req.params.category;
    const productsByCategory = products.filter(p => p.category === category);
    if (productsByCategory.length > 0) {
        return res.json(productsByCategory);
    } else {
        return res.status(404).json({ error: 'Category not found' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}/fakestore`);
});