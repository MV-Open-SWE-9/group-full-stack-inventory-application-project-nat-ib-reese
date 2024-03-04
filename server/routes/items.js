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


// POST new item
router.post("/", async (req, res, next) => {
  try {
    const newItem = await Item.create(req.body);
    res.status(201).json(newItem);
  } catch (error) {
    next(error);
  }
});

module.exports = router;