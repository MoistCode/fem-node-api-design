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

// Routes
app.get('/', (req, res) => {
    res.send({
        message: 'Hello!',
    });
});

app.post('/', (req, res) => {
    console.log(req.body);

    res.send({
        message: 'OK',
    });
});

const PORT = 3000;

export const start = () => {
    app.listen(PORT, () => {
        console.log(`Localhost is connected on port: ${PORT}`);
    });
}
