import { v4 as uuidv4 } from 'uuid';
import {IBasket} from "../../interfaces/basket/basket";
import {IBasketHotelAttributes} from "../../interfaces/basket/basket-hotel-attributes";
import {BasketType} from "../../interfaces/basket/basket-type";

export class BasketHotelItem implements IBasket<IBasketHotelAttributes>{
  id: string;
  type = BasketType.hotel;
  title: string;
  price: number;
  attributes: IBasketHotelAttributes;

  constructor(
    title: string,
    price: number,
    checkInDate: Date | string,
    checkOutDate: Date | string,
    guestsNumber: number
  ) {
    this.id = uuidv4();
    this.title = title;
    this.price = price;
    this.attributes = {
      checkInDate: checkInDate,
      checkOutDate: checkInDate,
      guestsNumber: guestsNumber
    };
  }
}
