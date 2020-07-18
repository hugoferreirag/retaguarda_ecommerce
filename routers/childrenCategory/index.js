const express = require('express');

const childrenRouters = express.Router();

childrenRouters.get('/', async (req,res) => {
    res.json([{
        product_id: 1,
        product_name: 'jaboticava',
        product_price: '10,50',
        product_description: 'muito bom',
        product_quantity: 100
    }])
});
childrenRouters.get('/:id', async (req,res) => {
    res.json({
        product_id: 1,
        product_name: 'jaboticava',
        product_price: '10,50',
        product_description: 'muito bom',
        product_quantity: 100
    });
});

childrenRouters.post('/', async (req,res) => {
    res.json({ response: 'criado com sucesso'});
});

childrenRouters.put('/:id', async (req,res) => {
    res.json({ repsonse: 'atualizado com sucesso'});
});

childrenRouters.delete('/:id', async (req,res) => {
    res.json({ response: 'deletado com sucesso'});
});

module.exports = childrenRouters;