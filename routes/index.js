const routes = require('express').Router();
const customersRoutes = require('./customers');
const ordersRoutes = require('./orders');
const authRoutes = require('./auth');
const { viewHome, viewAbout, viewMenu, viewOrder } = require('../controllers/views');

routes.get('/', viewHome);
routes.use('/about', viewAbout);
routes.use('/menu', viewMenu);
routes.use('/order', viewOrder);
routes.use('/customers', customersRoutes);
routes.use('/orders', ordersRoutes);
routes.use('/auth', authRoutes);

module.exports = routes;