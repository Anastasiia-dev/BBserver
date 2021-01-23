import {BasketType} from "./basket-type";

export interface IBasket<BasketAttributes> {
  id: string;
  type: BasketType,
  title: string;
  price: number;
  attributes: BasketAttributes;
}
