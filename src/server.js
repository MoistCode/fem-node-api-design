import express from 'express'
import { json, urlencoded } from 'body-parser'
import morgan from 'morgan'
import cors from 'cors'

export const app = express()

const router = express.Router();

app.disable('x-powered-by')

app.use(cors())
app.use(json())
app.use(urlencoded({ extended: true }))
app.use(morgan('dev'))

router.get('/me', (req, res) => {
    res.send({
        me: 'In the router for /me',
    });
});

const routes = [
    'get /cat/',
    'get /cat/:id',
    'post /cat',
    'put /cat/:id',
    'delete /cat/:id'
];

router.route('/cat')
    .get()
    .post();

router.route('/cat/:id')
    .get()
    .put()
    .delete();

app.use('/api', router);

const log = (req, res, next) => {
    console.log(`Logging request body: ${JSON.stringify(req.body)}`);
    console.log(`Logging request log count: ${JSON.stringify(req.timesLogIsCalled)}`);

    if (Number.isInteger(req.timesLogIsCalled)) {
        req.timesLogIsCalled += 1;
    } else {
        req.timesLogIsCalled = 1;
    }

    next();
};

app.use(log); // For entire server

app.get('/data', [log, log, log], (req, res) => {
    res.send({
        data: [1, 2, 3],
    });
});

app.put('/data', (req, res) => {

});

app.delete('/data', (req, res) => {

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
