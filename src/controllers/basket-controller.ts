import { Request, Response } from 'express';
import {BasketService} from "../services/basket/basket-service";
import {IBasket} from "../interfaces/basket/basket";
import {IBasketHotelAttributes} from "../interfaces/basket/basket-hotel-attributes";
import {IBasketPackageAttributes} from "../interfaces/basket/basket-package-attributes";

export class BasketController {
  private _basketItems: IBasket<IBasketHotelAttributes | IBasketPackageAttributes>[] = [];

  constructor(private basketService: BasketService) {
    this._basketItems = basketService.getMockData();
    this.getBasket = this.getBasket.bind(this);
    this.addToBasket = this.addToBasket.bind(this);
    this.deleteItemInBasket = this.deleteItemInBasket.bind(this);
  }

  getBasket(req: Request, res: Response) {
    return res.json(this._basketItems);
  }

  addToBasket(req: Request, res: Response) {
    const basketItem = this.basketService.createBasketFromRequest(req);
    this._basketItems = this._basketItems.concat(basketItem);
    res.json(basketItem);
  }

  deleteItemInBasket(req: Request, res: Response) {
    const itemToDeleteId = req.params.id
    this._basketItems = this._basketItems.filter(item => item.id !== itemToDeleteId);
    res.status(200).send();
  }
}

export const basketController = new BasketController(new BasketService());
