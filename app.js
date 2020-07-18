const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const routers = require('./routers');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routers);

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Server lintening on port ${port}`);
});
