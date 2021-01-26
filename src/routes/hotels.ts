import * as express from 'express';
import hotelsController from '../controllers/hotels-controller';

const router = express.Router();

router.get('/api/hotels', hotelsController.getHotels);
router.get('/api/hotels/:id', hotelsController.getHotelById)

export = router;
