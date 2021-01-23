import { Request } from 'express';
import {BasketType} from "../../interfaces/basket/basket-type";
import {BasketHotelItem} from "../../models/basket/basket-hotel-item";
import {BasketPackageItem} from "../../models/basket/basket-package-item";
import {IBasket} from "../../interfaces/basket/basket";
import {IBasketHotelAttributes} from "../../interfaces/basket/basket-hotel-attributes";
import {IBasketPackageAttributes} from "../../interfaces/basket/basket-package-attributes";

export class BasketService {
  createBasketFromRequest(req: Request): IBasket<IBasketHotelAttributes | IBasketPackageAttributes> {
    const itemType = req.body.type;

    if (itemType === BasketType.hotel) {
      return new BasketHotelItem(
        req.body.title,
        req.body.price,
        req.body.checkInDate,
        req.body.checkOutDate,
        req.body.guestsNumber
      );
    } else if (itemType === BasketType.package) {
      return new BasketPackageItem(
        req.body.title,
        req.body.price,
        req.body.name,
        req.body.description
      );
    }
  }

  getMockData(): IBasket<IBasketHotelAttributes | IBasketPackageAttributes>[] {
    return [
      new BasketHotelItem(
        'Amazing Hotel',
        2000,
        new Date(),
        new Date(5, 10, 2021),
        2
      ),
      new BasketPackageItem(
        'Ultra Package',
        5000,
        'Ultra Package',
        'Amazing beautiful package'
      )
    ];
  }
}
