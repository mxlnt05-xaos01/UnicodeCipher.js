/* Require Statements */

const express = require('express');
const multer = require('multer');
const mysql = require('mysql');

const app = express();
const upload = multer();

const servport = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;

const CipherData = (req, res, next) => {
    const inputSplit = req.body.input.split("");
    const keywordSplit = req.body.keyword.split("");
    let Final = new Array(inputSplit.length);
    // Deal with for loops.
    for(let s = 0; s < keywordSplit.length; s++) {
        keywordSplit[s] = keywordSplit[s].charCodeAt(0);
    }
    for(let i = 0; i < inputSplit.length; i++) {
        inputSplit[i] = inputSplit[i].charCodeAt(0);
    }
    for(let p = 0, e = 0; p < inputSplit.length; p++, e++) {
        if(e < keywordSplit.length) {
            Final[p] = Calculation(inputSplit[p], keywordSplit[e]);
        }
        else {
            e = 0;
            Final[p] = Calculation(inputSplit[p], keywordSplit[e]);
        }
    }
    for(let x = 0; x < inputSplit.length; x++) {
        Final[p] = String.fromCharCode(Final[p]);
    }
    req.body.input = Final.join("");
    next();
};

function Calculation(a, b) {
    if(a - b < 0) {
        const frst = a + b;
        const fin = frst - 32;
        return fin;
    }
    else {
        const frst = a - b;
        const fin = frst + 32;
        return fin;
    }
}

app.post('/submit-form', upload.none(), CipherData, (req, res) => {
    // Do whatever you want with this field.
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Faulty Server Packet");
});

app.listen(servport, () => {
    console.log(`Listening at localhost id: ${servport}`);
});

// Put MySQL Code here.