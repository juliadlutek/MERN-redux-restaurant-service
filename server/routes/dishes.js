import express from 'express';
import bodyParser from 'body-parser';

import { getDishes, createDish, deleteDish, editDish } from '../controllers/dishes.js'

const router = express.Router();

const urlencodedParser = bodyParser.urlencoded({ extended: false })


router.get('/', getDishes);
router.post('/', urlencodedParser, createDish);
router.delete('/:id', deleteDish);
router.put('/', urlencodedParser, editDish);

export default router 