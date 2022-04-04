const router = require("express").Router();

router.get('/', (req,res) =>{
    res.send('Estoy ya donde tengo que estar');
});

module.exports = router;
