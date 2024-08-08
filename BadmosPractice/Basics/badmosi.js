const jwt = require("jsonwebtoken");

// Sign the JWT
const token = jwt.sign(
    {
        name: "badmos",
        exp: Math.floor(Date.now() / 1000) + 3600 
    },
    "password"
);

// Decode the JWT
const decoded = jwt.decode(token);

console.log("Token:", token);
console.log("Decoded:", decoded);