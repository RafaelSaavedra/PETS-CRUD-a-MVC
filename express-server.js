const express = require('express');
const mongoose = require('mongoose')
const morgan = require('morgan');
const app = express();
const PORT = 4000
const PetsRoutes = require('./routes/PetsRoutes')

app.set('view engine', 'ejs');

//////////////////////////////////////////////
////// MIDDLEWARES BranchMVC MONGO
/////////////////////////////////////////////

app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}))



/////// CONNECTING TO EXTERNAL SERVER

mongoose.connect('mongodb+srv://Rafael:15Anestesiologia20@cluster0.rnudzg3.mongodb.net/PetsCrud-mvc?retryWrites=true&w=majority'
, (err) => {
    if( err) return console.log('Error al conectar a mongo...');
    return console.log('Conexión a Mongo exitosa !'); 
})

//////////////////////////////////////////////
////// ROUTES
/////////////////////////////////////////////

let database = [
    {id: 1, name: 'Stanley', age: 4, type: 'cat'},
    {id: 2, name: 'Dr Toby', age: 7, type: 'dog'},
    {id: 3, name: 'Juanita', age: 1, type: 'cat'},
    {id: 4, name: 'Camilla', age: 2, type: 'hamster'},
    {id: 5, name: 'Little Boots', age: 4, type: 'dog'},
];




///RUNNING THE SHOW


app.use(PetsRoutes);



/*
app.get ('/', (req, res) => {
    //req - client request data
     //res - response object goes to client
    
   res.send('Helloooo Mundo!!! :) 🌎');
   //res.json(database)
})
*/
////////////////////////////////////////////////////
////// LOCAL SERVER LISTENING
////////////////////////////////////////////////////

app.listen(PORT, ( ) => {
    console.log(`Server listening on port ${4000}`);    
})


///CREATE OPERATIONS
//CREATE(FORM)


/*
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

*/

