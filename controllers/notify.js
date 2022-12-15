const twilio = require('twilio');
require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

const sendMessage = (orderObj) => {
    let message = `${orderObj.name} just placed an order with Old Willow Cafe! 
    \nPickup Date: ${orderObj.date}\n
    Items in order:\nFlavor & Quantity:`;

    if (Array.isArray(orderObj.flavors)) {
        let i = 0;
        orderObj.flavors.forEach((flavor) => {
            message += `\n${flavor} - ${orderObj.counts[i]}`;
            i++;
        });
    } else {
        message += `\n${orderObj.flavors} - ${orderObj.counts}`;
    }

    message += `\n\nCustomer Information:\nName: ${orderObj.name}\nEmail: ${orderObj.email}\nPhone Number: ${orderObj.phone}`;

    client.messages.create({
        from: process.env.TWILIO_PHONE_NUMBER,
        to: process.env.PERSONAL_PHONE_NUMBER,
        body: message
    });
    //   .then((message) => console.log(message.sid));
};

module.exports = {sendMessage};