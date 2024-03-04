const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// GET all items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.get('/:itemId', async (req, res, next) => {
    try{
        const item = await Item.findByPk(req.params.itemsId)
        res.send(item)
    }catch(err){
        console.log(err)
    }
})

module.exports = router;