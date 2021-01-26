import { v4 as uuidv4 } from 'uuid';
import {IHotel} from "../../interfaces/hotel/hotel";

export class Hotel implements IHotel {
  id: string;
  title: string;
  image: string;
  description: string;

  constructor(
    title: string,
    image: string,
    description: string
  ) {
    this.id = uuidv4();
    this.title = title;
    this.image = image;
    this.description = description;
  }
}
