import {
    Router
} from 'express'

const router = Router()

router.route('/')
    .get((req, res) => {
        res.send({
            message: 'GET /item',
        });
    })
    .post((req, res) => {
        res.send({
            message: 'POST /item',
        });
    });

router.route('/:id')
    .get((req, res) => {
        res.send({
            message: 'GET /item/:id',
        });
    })
    .delete((req, res) => {
        res.send({
            message: 'DELETE /item/:id',
        });
    })
    .put((req, res) => {
        res.send({
            message: 'PUT /item/:id',
        });
    })

export default router