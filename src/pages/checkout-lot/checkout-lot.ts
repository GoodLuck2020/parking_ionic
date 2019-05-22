import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from "ionic-angular";
import {LotService} from "../../providers/lot-service";

@IonicPage({
  name: 'page-checkout-lot',
  segment: 'checkout-lot/:id'
})

@Component({
  selector: 'page-checkout-lot',
  templateUrl: 'checkout-lot.html'
})
export class CheckoutLotPage {
  param: number;
  // lot info
  public lot: any;
  // spot info
  public spot: any;
  // number of nights
  public nights = 7;
  // number of guests
  public guests = 3;
  // date from
  public dateFrom = new Date();
  // date to
  public dateTo = new Date();

  public paymethods = 'creditcard';

  constructor(public nav: NavController, public lotService: LotService, public navParams: NavParams, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {
    // console.log(this.lotService.getAll()[0])
    // console.log(this.navParams.data)
    // set sample data
    this.param = this.navParams.get('id');
    this.lot = this.lotService.getItem(this.param) ? this.lotService.getItem(this.param) : this.lotService.getAll()[0];
    this.spot = this.lot.spots[0];
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
      message: 'Booking Success!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    this.lotService.booking(this.lot)
        .then(response => {
          setTimeout(() => {
            loader.dismiss();
            toast.present();
            // back to home page
            this.nav.setRoot('page-home');
          }, 3000)
        });
  }
}
