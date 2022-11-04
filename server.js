const express = require("express")
const app = express();
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const helpers = require('./utils/helpers');

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const hbs = exphbs.create({ defaultLayout: "main", extname: '.hbs' });

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

app.use(routes);


app.listen(PORT, ()=> {
    console.log(`Server connected on port ${PORT}`)
})
