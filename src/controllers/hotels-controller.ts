import { Request, Response } from 'express';
import {HotelService} from "../services/hotel/hotel-service";

class HotelsController {
  constructor(private _hotelsService: HotelService) {
    this.getHotels = this.getHotels.bind(this);
    this.getHotelById = this.getHotelById.bind(this);
  }

  getHotels(req: Request, res: Response) {
    return res.json({
      hotels: this._hotelsService.getHotels()
    })
  }

  getHotelById(req: Request, res: Response) {
    const id = req.params.id;

    return res.json({
      hotel: this._hotelsService.getHotelById(id) || []
    });
  }
}

export default new HotelsController(new HotelService());
