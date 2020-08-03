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

app.get('/data', (req, res) => {
    res.send({
        message: 'Hello from GET /data',
    });
});

app.post('/data', (req, res) => {
    res.send(`This is the request body: ${JSON.stringify(req.body)}`);
});

const PORT = 3000;

export const start = () => {
    app.listen(PORT, () => {
        console.log(`Localhost is connected on port: ${PORT}`);
    });
}
