const express = require('express');
const morgan = require('morgan');
const app = express();
app.set('view engine', 'ejs');

//////////////////////////////////////////////
////// MIDDLEWARES BranchMVC
/////////////////////////////////////////////
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}))
//////////////////////////////////////////////
////// DATABASE
////////////////////////////////////////////////

let database = [
    {id: 1, name: 'Stanley', age: 4, type: 'cat'},
    {id: 2, name: 'Dr Toby', age: 7, type: 'dog'},
    {id: 3, name: 'Juanita', age: 1, type: 'cat'},
    {id: 4, name: 'Camilla', age: 2, type: 'hamster'},
    {id: 5, name: 'Little Boots', age: 4, type: 'dog'},
];
//////////////////////////////////////////////
////// ROUTES
/////////////////////////////////////////////

app.get ('/', (req, res) => {
    // req - client request data
    // res - response object goes to client

    res.send('Helloooo World!!!  🌎');
})

///CREATE OPERATIONS
//CREATE(FORM)
app.get('/pets/add', (req, res) => {
    res.render('pets/add');
})

//CREATE

app.post('/pets',(req, res) => {
    //console.log(req.body);
    const newPet = {
        id: database.length + 1,
        name: req.body.name,
        type: req.body.type,
        age: Number(req.body.age),
    }

    database.push(newPet)
    

    res.redirect(`/pets/${newPet.id}`);
    
})

///UPDATE OPERATIONS
//UPDATE(FORM)
app.get('/pets/:id/edit', (req, res) => {
    const petID = Number(req.params.id);
    const pet = database.find(petElement => petElement.id === petID)
    const templateVars = {pet}
    res.render('pets/edit',templateVars);
})

//UPDATE

app.post('/pets/:id',(req, res) => {
    const id = Number(req.params.id)
    //console.log(req.body);
    const updatedPet = {
        id: id,
        name: req.body.name,
        type: req.body.type,
        age: Number(req.body.age),
    }

    for (let i = 0; i < database.length; i++) {
        if (database[i].id ===id){
            database[i] = updatedPet;
        }
        
    }
    

    res.redirect(`/pets/${updatedPet.id}`);
    
})


///READ OPERATIONS
//READ ALL

app.get('/pets', (req,res) => {
    const templateVars = {database}
    res.render('pets/index',templateVars);
    console.log(database);
    
    
})

//READ ONE

app.get('/pets/:id', (req,res) => {
    const petID = Number(req.params.id);
    const pet = database.find(petElement => petElement.id === petID)
    const templateVars = {pet}
    res.render('pets/show',templateVars);


})

/////DELETE

app.post('/pets/:id/delete', (req, res) => {
    const petID = Number(req.params.id);
    const  updatedDatabase = database.filter(petElement => petElement.id !== petID)

    database = updatedDatabase;
    
    res.redirect('/pets');


})



////////////////////////////////////////////////////
////// SERVER LISTENING
////////////////////////////////////////////////////

app.listen(4000, ( ) => {
    console.log('Server listening on 4000...');
    
})