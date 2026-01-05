/* Import Statements */

import express from 'express';
import multer from 'multer';
import mysql from 'mysql';

const app = express();
const upload = multer();

const servport = Math.floor(Math.random() * (9999 - 0 + 1)) + 0;

app.post('/submit-form', upload.none(), (req, res) => {});

class Iterative {
    constructor(input, keyword) {}
    DecimalToChars() {}
}

app.use((err, req, res, next) => {});

app.listen(servport, () => {
    console.log(`Listening at localhost id: ${servport}`);
});