import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

const log = (req, res, next) => {
    console.log(`Logging request body: ${JSON.stringify(req.body)}`);
    next();
};

app.use(log); // For entire server

app.get('/data', [log, log, log], (req, res) => {
    res.send({
        data: [1, 2, 3],
    });
});

app.post('/data', (req, res) => {
    res.send({
        ok: true,
    });
});

const PORT = 3000;
 
export const start = () => {
    app.listen(PORT, () => {
        console.log(`Localhost is connected on port: ${PORT}`);
    });
}
