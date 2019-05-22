import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from "ionic-angular";
import {CarService} from "../../providers/car-service";

@IonicPage({
  name: 'page-checkout-car',
  segment: 'checkout-car/:id'
})

@Component({
  selector: 'page-checkout-car',
  templateUrl: 'checkout-car.html'
})
export class CheckoutCarPage {
  param: number;
  // car shop information
  public shop: any;
  // car info
  public car: any;
  // date from
  public dateFrom = new Date();
  // date to
  public dateTo = new Date();

  public paymethods = 'creditcard';

  constructor(public nav: NavController, public navParams: NavParams, public carService: CarService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    // set sample data
    this.param = this.navParams.get('id');
    this.shop = this.carService.getItem(this.param) ? this.carService.getItem(this.param) : this.carService.getAll()[0];
    this.car = this.shop.cars[0];
  }

  // process send button
  send() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Car Rent Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    setTimeout(() => {
      loader.dismiss();
      toast.present();
      // back to home page
      this.nav.setRoot('page-home');
    }, 3000)
  }
}
