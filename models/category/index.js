const functionsDb = require('./functions');
const ModelUser = {

  category_name: {
    type: 'string',
    maximumLength: 50,
    minimumLength: 3,
    especialCharacters: false,
  },
  category_description: {
    type: 'string',
    maximumLength: 150,
    minimumLength: 10,
    especialCharacters: false
  },
  db: {
    ...functionsDb
  }
}

module.exports = ModelUser;