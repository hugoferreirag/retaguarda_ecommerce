const validations = require('../../validations/category');
const categoryModel = require('../../models/category');

const categoryController = {
    create: async (category, res) => {
        try {

            await validations.create(category);
            
            // await categoryModel.db.create(category);
            
            res.json({ msg: 'Categoria criada com sucesso!', items: category }).status(201);

        } catch(error) {
            res.json(error).status(error.status || 500);
        }
    },
    findAll: async (payload) => {

    },
    findOne: async (payload) => {

    },
    delete: async (payload) => {

    },
    update: async (payload) => {

    },
}

module.exports = categoryController;