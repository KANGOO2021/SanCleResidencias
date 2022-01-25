const { Router } = require('express');
const router = Router();
const { formularioConsultas, formularioConsultasPhone, formulariomensajes, formularioConsultasUpdate, formularioConsultasDelete } = require('../controllers/formulario');



router.get('/consultas', formularioConsultas);
router.get('/consultas/:telefono', formularioConsultasPhone);
router.post('/mensajes', formulariomensajes);
router.put('/consultas/:id', formularioConsultasUpdate);
router.delete('/consultas/:id', formularioConsultasDelete);



module.exports = router;