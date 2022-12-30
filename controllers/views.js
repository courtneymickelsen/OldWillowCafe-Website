const path = require('path');

const viewHome = (req, res) => {
    res.render('index.ejs');
};

const viewAbout = (req, res) => {
    res.render('about.ejs');
};

const viewMenu = (req, res) => {
    res.render('menu.ejs');
};

const viewOrder = (req, res) => {
    res.render('order.ejs');
};

const viewThankYou = (req, res) => {
    res.render('thank-you.ejs');
};

module.exports = {viewHome, viewAbout, viewMenu, viewOrder, viewThankYou};