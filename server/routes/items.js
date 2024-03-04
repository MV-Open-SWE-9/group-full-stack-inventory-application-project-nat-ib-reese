const express = require('express')
const router = express.Router()
const {Item} = require('../models')

router.get('/:itemId', async (req, res, next) => {
    try{
        const item = await Item.findByPk(req.params.itemsId)
        res.send(item)
    }catch(err){
        console.log(err)
    }
})

module.exports = router;