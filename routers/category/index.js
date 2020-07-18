const express = require('express');
const categoryControllers = require('../../controllers/category');

const childrenRouters = express.Router();

// get all category
childrenRouters.get('/', async (req, res) => {
    res.json([{
        category_id: 1,
        category_name: 'jaboticava',
        category_price: '10,50',
        category_description: 'muito bom',
        category_quantity: 100
    }])
});
// get one category
childrenRouters.get('/:id', async (req, res) => {
    res.json({
        category_id: 1,
        category_name: 'jaboticava',
        category_price: '10,50',
        category_description: 'muito bom',
        category_quantity: 100
    });
});
// create category
childrenRouters.post('/', async (req, res) => {
    const { body } = req;
    await categoryControllers.create(body, res);    
});
// uupdate one category
childrenRouters.put('/:id', async (req, res) => {
    res.json({ repsonse: 'atualizado com sucesso' });
});
// delete one category
childrenRouters.delete('/:id', async (req, res) => {
    res.json({ response: 'deletado com sucesso' });
});

module.exports = childrenRouters;