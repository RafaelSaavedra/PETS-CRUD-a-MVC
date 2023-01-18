const express = require ('express');
const PetsController = require ('../controllers/PetsController');

const router = express.Router();


router.get('/routes/PetsRoutes', PetsController.getSg);


///CREATE OPERATIONS
//CREATE(FORM)

router.get('/pets/add', PetsController.CreateForm);

//CREATE

router.post('/pets', PetsController.Create);

///UPDATE OPERATIONS
//UPDATE(FORM)

router.get('/pets/:id/edit', PetsController.updateForm);

//UPDATE

router.post('/pets/:id',PetsController.updateOne);

///READ OPERATIONS
//READ ALL

router.get('/pets', PetsController.getAll);

//READ ONE

router.get('/pets/:id',PetsController.getOne);

/////DELETE

router.post('/pets/:id/delete', PetsController.delete);


module.exports = router;

