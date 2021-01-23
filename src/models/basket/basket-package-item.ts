import { v4 as uuidv4 } from 'uuid';
import {BasketType} from "../../interfaces/basket/basket-type";
import {IBasket} from "../../interfaces/basket/basket";
import {IBasketPackageAttributes} from "../../interfaces/basket/basket-package-attributes";

export class BasketPackageItem implements IBasket<IBasketPackageAttributes>{
  id: string;
  type = BasketType.package;
  title: string;
  price: number;
  attributes: IBasketPackageAttributes;

  constructor(
    title: string,
    price: number,
    name: string,
    description: string
  ) {
    this.id = uuidv4();
    this.title = title;
    this.price = price;
    this.attributes = {
      name, description
    };
  }
}
