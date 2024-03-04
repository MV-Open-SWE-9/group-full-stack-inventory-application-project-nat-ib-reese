const express = require("express");
const router = express.Router();
const { Item } = require("../models");

// Middleware
const { check, validationResult } = require("express-validator");
router.use(express.json());
router.use(
  express.urlencoded({
    extended: true,
  })
);

// GET all items
router.get("/", async (req, res, next) => {
  try {
    const items = await Item.findAll();
    res.send(items);
  } catch (error) {
    next(error);
  }
});

router.get("/:itemId", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.itemId);
    res.send(item);
  } catch (err) {
    console.log(err);
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

router.put("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    console.log(item);
    const updatedItem = await item.update(req.body);
    res.json(updatedItem);
  } catch (e) {
    next(e);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const item = await Item.findByPk(req.params.id);
    await item.destroy();
    const items = await Item.findAll();
    res.send(items);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
