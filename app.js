let express = require('express');
let todoController = require('/controllers/todoController');

let app = express();

//set up template engine
app.set('view engine', 'ejs');

//static files
app.use(express.static('/public'));

//fire controllers
todoController(app);

//Listen to port
app.listen(3000);
console.log('You are listening to the Port 3000');
