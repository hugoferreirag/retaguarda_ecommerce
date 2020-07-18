const categoryModel = require('../../models/category');

const validations = {
    create: async (payload) => {
        if(!payload) throw {error: { msg: 'Dados inválidos', status: 400 } };
        
        for await ( let [key, value] of Object.entries(payload)) {
            if(!categoryModel[key]) 
                throw {error: { msg: `Campo ${key} não existe`, status: 400 } };
            if(typeof value !== categoryModel[key].type)
                throw {error: { msg: `Tipagem inválida para ${key}, deve ser ${categoryModel[key].type}`, status: 400 } };
            if(value.length > categoryModel[key].maximumLength)
                throw {error: {msg: `Quantidade máxima de dígitos para ${key} inválida: ${value}`}};
            if(value.length < categoryModel[key].minimumLength)
                throw {error: {msg: `Quantidade mínima de dígitos para ${key} inválida: ${value}`}};
        }
    },
};

module.exports = validations;

