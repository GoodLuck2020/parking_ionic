import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from "ionic-angular";
import {TripService} from "../../providers/trip-service";

@IonicPage({
  name: 'page-checkout-trip',
  segment: 'checkout-trip/:id'
})

@Component({
  selector: 'page-checkout-trip',
  templateUrl: 'checkout-trip.html'
})
export class CheckoutTripPage {
  param: number;
  // trip data
  public trip: any;
  // number of adults
  public adults = 2;
  // date
  public date = new Date();

  public paymethods = 'creditcard';

  constructor(public nav: NavController, public navParams: NavParams, public tripService: TripService, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    // set sample data
    this.param = this.navParams.get('id');
    this.trip = this.tripService.getItem(this.param) ? this.tripService.getItem(this.param) : this.tripService.getAll()[0];
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
      message: 'Book Activity Success!',
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
