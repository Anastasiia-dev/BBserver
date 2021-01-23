import * as express from 'express';
import {basketController} from "../controllers/basket-controller";

const router = express.Router();

router.get('/api/basket', basketController.getBasket);
router.post('/api/basket', basketController.addToBasket);
router.patch('/api/basket/:id', basketController.deleteItemInBasket);

export = router;

