const paypal = require('paypal-rest-sdk');      //import paypal rest module
require('./configure');

const create_payment_json = {                   //payment details are created in this json file
    "intent": "authorize",
    "payer": {
        "payment_method": "paypal"
    },
    "redirect_urls": {
        "return_url": "http://localhost:3000/success",      //route after successfully payment is made /success
        "cancel_url": "http://localhost:3000/cancel"        //route if transaction is cancelled  /cancel
    },
    "transactions": [{
        "item_list": {
            "items": [{
                "name": "Ashu Store New Item",             //Name of item for which purchase is being made
                "sku": "item",
                "price": "1.00",                //supposed to come from website through form or database
                "currency": "USD",
                "quantity": 1
            }]
        },
        "amount": {
            "currency": "USD",
            "total": "1.00"
        },
        "description": "This is the payment description."
    }]
};

paypal.payment.create(create_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        for (let index = 0; index < payment.links.length; index++) {
            //Redirect user to this endpoint for redirect url
            if (payment.links[index].rel === 'approval_url') {
                console.log(payment.links[index].href);                 //res.redirect(payment.links[index].href)
            }
        }
        console.log(payment);
    }
});

const execute_payment_json = {                      //execute json file for charging the consumer
    "payer_id": "Appended to redirect url",         //"payer_id" = req.query.PayerID
    "transactions": [{                              //this json file has to be created inside success route
        "amount": {
            "currency": "USD",                      //type of currency is used for charges
            "total": "1.00"
        }
    }]
};

let paymentId = 'PAYMENT id created in previous step';    //let paymentId = req.query.paymentId

//this execute function has to be created inside success route with execute-payment json to charge the consumers

paypal.payment.execute(paymentId, execute_payment_json, function (error, payment) {
    if (error) {
        console.log(error.response);
        throw error;
    } else {
        console.log("Get Payment Response");
        console.log(JSON.stringify(payment));       //details of payment with consumer info can be used to store in database
    }
});