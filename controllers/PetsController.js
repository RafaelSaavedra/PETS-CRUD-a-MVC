
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

const Pet = require('../models/Pet');

module.exports = {   
    


/////////////CREATE OPERATIONS
//////////CREATE FORM

createForm: (req, res) => {
    
    res.render('pets/add');
},

//////////CREATE

create: (req, res) => {
    console.log(req.body);
    const newPet = {
        name: req.body.name,
        type: req.body.type,
        age: Number(req.body.age),
    }
    
    const pet = new Pet(newPet)
    
    // pet.save() devuelve una promesa
    savedPet = pet.save()
    
    savedPet
        // Respondo exitosamente
        .then((myPet) => {
            
            res.render(`pets/show`, myPet);
          // res.redirect(`pets/show`, myPet);
        })
        // Respondo si hay error
        .catch((error) => {
            res.status(400).send("Hubo un error");
        })
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
        
        const newPet = {
            name: req.body.name,
            type: req.body.type,
            age: Number(req.body.age),
        }
        
    
       //const templateVars = {database}
       const pet = new Pet (newPet)
      // const pet = new Pet(newPet);
        //pets = pet.get();
        pets = pet.find()
       pets
        // Respondo exitosamente
         .then((pets) => {
             //res.render(`pets/show`, pets);
            //console.log(pets);
            res.render('pets/index',pets);
            //res.send('/pets',pets);
            console.log(pets);
         })
         // Respondo si hay error
         .catch((error) => {
             res.status(400).send("Hubo un error");
         })
       
         


       //res.render('pets/index',SavedPets);

        //console.log(database); 
        //console.log('Metodo:... ' +req.method);
        
        
         
    },
    
////////////READ ONE    

    getOne:  (req,res) => {
       Pet.findById(req.params.name)
        .then((pet) => {
            const Pets = { pet }
            res.render('pets/show',pet);
        })
        .catch((err) => {
            console.log(err);
            //alert("error")
        })
        
    
    },

////////////DELETE    

    delete: (req, res) => {
        const petID = Number(req.params.id);
        const  updatedDatabase = database.filter(petElement => petElement.id !== petID)
    
        database = updatedDatabase;
        
        res.redirect('/pets');
    }
}

/*
//module.exports= {
    
const crear = (req, res) => {
        const pet = newPet = { 
            name: req.body.name,
            type: req.body.type,
            age: Number(req.body.age),}
        const savedPet = pet.create()
        console.log(savedPet);
        console.log(savedPet.name);    
    }

Create : async () => {
    const pet = new Pet ({name: database[0].name, type: req.body.type, age : 77})
    const savedPet = await pet.save()
    console.log(savedPet);
    console.log(savedPet.name);    
}

crear()
*/
//module.exports = {


//crear()
/*
const buscarTodo =async () => {
    const pets = await Pet.find()
    console.log(pets);    
}

buscarTodo();

const buscarUno = async () => {
    const pet = await Pet.findOne({name: 'Pedro'})
    console.log(pet)
}

//buscarUno()

const actualizar = async () => {
    const pet = await Pet.findOne({ name: 'Pedro'})
    console.log(pet)
    pet.age = 30
    await pet.save()
}

//actualizar()

const eliminar = async () => {
    const pet = await Pet.findOne({ name:'Pedro'})
    console.log(pet)
    if (pet){
        await pet.remove()
    }
}

//eliminar()





   const getall = (req, res) => {
        //res.send('Mascotas....desde el controlador')
        Pet.findAll()
        .then((result) =>{
            console.log(' res.json(result)')
        })
        .catch((err) => {
            res.send('Hola desde el controlador!!! Todo salió mal :(')
        })
    }

getall()

*/


/////CONECTA A MONGO PERO FUERA DE MODULE EXPORTS:

const crear = async () => {
    const pet = new Pet ({name: 'Pickles', type: 'Dog', age : 77})
    const savedPet = await pet.save()
    console.log(savedPet);
    console.log(savedPet.name);    
}

//crear()

///INTENTO FALLIDO USANDO EL MISMO FORMATO:

// Crear : (req, res) => {
//     const pet = new Pet = { 
//         name: req.body.name,
//         type: req.body.type,
//         age: Number(req.body.age),}
//         const savedPet = pet.create()
//         console.log(savedPet);
//     //console.log(savedPet.name);    
// },

// crear()



