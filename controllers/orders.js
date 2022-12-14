const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;
const mongooseObjId = require('mongoose').Types.ObjectId;
const {sendMessage} = require('./notify');

const getAllOrders = async (req, res) =>{
    try {
        const response = await mongodb.getDb().collection('orders').find();
        response.toArray().then((list) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(list);
        });
    } catch (error){
        res.status(500).json(error);
    };
};

const getSingleOrder = async (req, res) => {
    try {
        const orderId = new ObjectId(req.body.id);
        if (!(mongooseObjId.isValid(orderId))) {
            res.status(400).send({'Invalid Id' : orderId});
            return;
        }
        const response = await mongodb.getDb().collection('orders').find({ _id: orderId });
        response.toArray().then((list) => {
            res.setHeader('Content-Type', 'application/json');
            res.status(200).json(list);
        });
    } catch (error) {
        res.status(500).json(error);
    };
};

const createOrder = async (req, res) => {
    const orderObj = {
        customerId: req.body.customerId,
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        date: req.body.date,
        flavors: req.body.flavor,
        counts: req.body.count,
    };
    const response = await mongodb.getDb().collection('orders').insertOne(orderObj);
    if (response.acknowledged) {
        sendMessage(orderObj);
        res.redirect('/order-complete');
    } else {
        res.status(500).json(response.error || 'Something went wrong. Please try again.');
    }
};

const editOrder = async (req, res) => {
    try {
        const orderId = new ObjectId(req.body.id);
        if (!(mongooseObjId.isValid(orderId))) {
            res.status(400).send({'Invalid Id' : orderId});
            return;
        }
        const orderObj = {
            customerId: req.body.customerId,
            flavor: req.body.flavor,
            count: req.body.count,
            deliveryDate: req.body.deliveryDate,
        };
        const response = await mongodb.getDb().collection('orders').replaceOne({_id: orderId}, orderObj);

        if (response.acknowledged) {
            res.status(204).json(response);
        }
         else {
            res.status(500).json(response.error || 'Something went wrong. Please try again.');
        }
    } catch(error) {
        res.status(500).json(error);
    };
}

const deleteOrder = async (req, res) => {
    try {
        const orderId = new ObjectId(req.params.id);
        if (!(mongooseObjId.isValid(orderId))) {
            res.status(400).send({'Invalid Id' : orderId});
            return;
        }
        const response = await mongodb.getDb().collection('orders').deleteOne({_id: orderId});
        if (response.deletedCount > 0){
            res.status(200).send();
        } else {
            res.status(500).send(response.error);
        }
    } catch(error) {
        res.status(500).json(error);
    };
}

module.exports = { getAllOrders, getSingleOrder, createOrder, editOrder, deleteOrder };