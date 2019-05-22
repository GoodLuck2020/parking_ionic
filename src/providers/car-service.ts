import {Injectable} from "@angular/core";
import {CARS} from "../mocks/mock-cars";

@Injectable()
export class CarService {
  private cars: any;

  constructor() {
    this.cars = CARS;
  }

  getAll() {
    return this.cars;
  }

  getItem(id) {
    for (var i = 0; i < this.cars.length; i++) {
      if (this.cars[i].id === parseInt(id)) {
        return this.cars[i];
      }
    }
    return null;
  }

  remove(item) {
    this.cars.splice(this.cars.indexOf(item), 1);
  }
}
