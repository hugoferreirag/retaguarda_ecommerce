const database = require('../../config/db.js');
const table = 'stock_category'
const functions = {
  create: async (payload) => {
    const keys = Object.keys(payload).toString();
    const values = Object.values(payload).join("','").toString()
    await database.query(`INSERT INTO ${table} 
       (${keys})
        VALUES
       ('${values}') `);  
  },
  update: () => {
      console.log('atualizou');
  },
  getByEmail: async (payload) => {
    const keys = Object.keys(payload).toString().toLowerCase();
    const values = Object.values(payload).join("','").toString()
  
    const insertIntoUsers = await database.query(`SELECT * FROM ${table} 
       WHERE ${keys.split(',')[0]} = '${values.split(',')[0].replace("'", '')}'`);
      if(!insertIntoUsers) return { userInvalid: true } 
      return { Status: null, Data:{
        Message: true,
        DataUser: insertIntoUsers, 
      } 
    };
  },
  getById: async (payload) => {
    const keys = Object.keys(payload).toString().toLowerCase();
    const values = Object.values(payload).join("','").toString()
    const insertIntoUsers = await database.query(`SELECT * FROM ${table} 
       WHERE ${keys.split(',')[0]} = '${values.split(',')[0].replace("'", '')}'`);
      if(!insertIntoUsers) return { userInvalid: true } 
      return { Status: null, Data:{
        Message: true,
        DataUser: insertIntoUsers, 
      } 
    };
  },
}
module.exports = functions;
                 