import {Component} from "@angular/core";
import {IonicPage, NavParams, NavController} from "ionic-angular";
import {CarService} from "../../providers/car-service";

@IonicPage({
  name: 'page-car-detail',
  segment: 'car-detail/:id'
})

@Component({
  selector: 'page-car-detail',
  templateUrl: 'car-detail.html'
})
export class CarDetailPage {
  param: number;
  // car shop information
  public shop: any;

  // number of days
  public numDays = 3;

  constructor(public nav: NavController, public navParams: NavParams, public carService: CarService) {
    this.param = this.navParams.get('id');
    this.shop = this.carService.getItem(this.param) ? this.carService.getItem(this.param) : this.carService.getAll()[0];
  }

  // go to checkout page
  checkout(shop) {
    this.nav.push('page-checkout-car', {
      'id': shop.id
    });
  }
}
