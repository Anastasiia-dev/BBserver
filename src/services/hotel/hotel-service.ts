import {Hotel} from "../../models/hotel/hotel";

export class HotelService {
  private _hotels = this._mockHotels();

  getHotels() {
    return this._hotels;
  }

  getHotelById(id: string) {
    return this._hotels.find(hotel => hotel.id === id);
  }

  private _mockHotels(): Hotel[] {
    return [
      new Hotel('Squilliam\'s tower', 'https://static.wikia.nocookie.net/spongebob/images/e/ed/Squidville_070.jpg', 'Squilliam\'s tower is Squilliam Fancyson\'s place of residence. It is one of the fanciest and tallest houses in Bikini Bottom. It first appears in the episode "Band Geeks," but the exterior isn\'t shown until "House Fancy.'),
      new Hotel('Tentacle Acres', 'https://static.wikia.nocookie.net/spongebob/images/4/4e/Squilliams_House.png', 'Tentacle Acres, otherwise known as Squidville, is the gated community for octopi in which Squidward briefly lives in for a majority of the episode "Squidville." At the climax, SpongeBob and Patrick come to apologize to him for using reef blowers to suck up his house.')
    ];
  }
}
