// MVC Model-View-Controller
const fs = require('fs');
const model = require('../model/product')
const mongoose = require('mongoose');
const Product = model.Product;

// Create
exports.createProduct = (req, res) => {
    const product = new Product(req.body);
    product.save();
    res.status(201).json(product);
};

// Read
exports.getAllProducts = async (req, res) => {
    const product = await Product.find();
    res.json(product);
};

// ReadOne
exports.getProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findById(id);
        res.status(201).json(product);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

// Replace
exports.replaceProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOneAndReplace({ _id: id }, req.body, { new: true });
        res.status(201).json(product);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

// Update
exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOneAndUpdate({ _id: id }, req.body, { new: true });
        res.status(201).json(product);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};

// Delete
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    try {
        const product = await Product.findOneAndDelete({ _id: id });
        res.status(201).json(product);
    }
    catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
};