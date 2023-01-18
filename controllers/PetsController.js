
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


module.exports = {

    getSg : (req, res) => {
        res.send('Mascotas....desde el controlador')
    },

/////////////CREATE OPERATIONS
//////////CREATE FORM

CreateForm: (req, res) => {
    
    res.render('pets/add');
},

//////////CREATE

Create: (req, res) => {
    //console.log(req.body);
    const newPet = {
        id: database.length + 1,
        name: req.body.name,
        type: req.body.type,
        age: Number(req.body.age),
    }
    database.push(newPet)
    
    res.redirect(`/pets/${newPet.id}`);  
},

//////////UPDATE FORM

updateForm: (req, res) => {
    const petID = Number(req.params.id);
    const pet = database.find(petElement => petElement.id === petID)
    const templateVars = {pet}
    res.render('pets/edit',templateVars);
},
//////////UPDATE

updateOne: (req, res) => {
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
},

///////////READ ALL

    getAll:(req,res) => {
        const templateVars = {database}
        res.render('pets/index',templateVars);
        //console.log(database);  
         
    },

////////////READ ONE    

    getOne:  (req,res) => {
        const petID = Number(req.params.id);
        const pet = database.find(petElement => petElement.id === petID)
        const templateVars = {pet}
        
        
        
        res.render('pets/show',templateVars);
    
    },

////////////DELETE    

    delete: (req, res) => {
        const petID = Number(req.params.id);
        const  updatedDatabase = database.filter(petElement => petElement.id !== petID)
    
        database = updatedDatabase;
        
        res.redirect('/pets');
    }
}