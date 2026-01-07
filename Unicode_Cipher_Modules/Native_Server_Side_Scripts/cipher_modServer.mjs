/* Import Statements */

import express from 'express';
import multer from 'multer';
import mysql from 'mysql2/promise';

const app = express();
const upload = multer();

const servport = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;

app.post('/submit-form', upload.none(), (req, res) => {
    const influx = req.body.input;
    const inkey = req.body.keywords;
    const influxObj = new Iterative(influx, inkey);
    const Internment = influxObj.DecimalToChars();
    req.body.input = Internment;
});

class Iterative {
    constructor(input, keyword) {
        const inputSplit = input.split("");
        const keywordSplit = keyword.split("");
        let Final = new Array(inputSplit.length);
        for(let s = 0; s < keywordSplit.length; s++) {
            keywordSplit[s] = keywordSplit[s].codePointAt(0);
        }
        for(let i = 0; i < inputSplit.length; i++) {
            inputSplit[i] = inputSplit[i].codePointAt(0);
        }
        for(let r = 0, g = 0; r < inputSplit.length; r++, g++) {
            if(g < keywordSplit.length) {
                Final[r] = Calculation(inputSplit[r], keywordSplit[g]);
            }
            else {
                g = 0;
                Final[r] = Calculation(inputSplit[r], keywordSplit[g]);
            }
        }
        this.Final = Final;
    }
    DecimalToChars() {
        const str = String.fromCodePoint(...this.Final);
        return str;
    }
}

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

// Client Errors
app.use((err, req, res, next) => {
    res.status(500).send("Server Processing Failure!")
});

// Put MySQL Code here.

// Server Errors

app.listen(servport, () => {
    console.log(`Listening at localhost id: ${servport}`);
});