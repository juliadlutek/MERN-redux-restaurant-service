import express from 'express';
import bodyParser from 'body-parser';

import { getOrders, createOrder, deleteOrder, editOrder, switchOrderRealised } from '../controllers/orders.js'

const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/', getOrders);
router.post('/', urlencodedParser, createOrder);
router.delete('/:id', deleteOrder);
router.put('/', urlencodedParser, editOrder);
router.patch('/realised/:id', urlencodedParser, switchOrderRealised);

export default router