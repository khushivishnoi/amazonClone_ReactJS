const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe= require("stripe")(
    "sk_test_51LOMvTSH0n9SiKoAk2zSI1pjpIMNUO3XlwCkzmIXMZJoptAaq8kSSt9trnmfxorbhgwFNvR1RUlENsgOQJoIki4000WyfGy9sQ"
);
//API
//App confg
const app= express();

// - Middlewares
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
// app.use(cors());
// const corsOptions ={
//     origin:'http://localhost:5001', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));
app.use(express.json());


// - API routes
app.get("/", (request, response)=> response.status(200).send("hello world"));
app.get("/khushi", (request, response)=> response.status(200).send("what's up khushi"));

app.get("/deepanshi", (request, response)=> response.status(200).send("heyyy deepanshi"));


app.post('/payments/create', async (request, response) => {
    // try {
    //     let response = await getAllPosts();
    // } catch(e) {
    //     console.log(e);
    // }
    // response.setHeader('Access-Control-Allow-Origin', ' *')
    const total = request.query.total;
    console.log("Payment is recieved BOOM!!! for this amount>>>> ",total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",
    });
    // OK - CREATED
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})


 // - Listen command
 exports.api = functions.https.onRequest(app);

 // Example endpoint
// http://localhost:5000/clone-89c82/us-central1/api
//http://localhost:5001/clone-89c82/us-central1/api