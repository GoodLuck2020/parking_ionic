import { Component } from '@angular/core';
import {IonicPage, NavController, LoadingController, ToastController, AlertController, Alert} from 'ionic-angular';
import {HomePage} from "../home/home";
import {easyParkingApp} from "../../app/app.component";
import {AngularFirestore} from "angularfire2/firestore";




@IonicPage({
  name: 'page-edit-profile',
  segment: 'edit-profile'
})

@Component({
    selector: 'page-edit-profile',
    templateUrl: 'edit-profile.html'
})
export class EditProfilePage {
  profiledata: Boolean = true;


  constructor(public afStore: AngularFirestore, public app: easyParkingApp, private alertCtrl: AlertController,  public navCtrl: NavController, public loadingCtrl: LoadingController, public toastCtrl: ToastController) {

  }

  // process send button
  async sendData() {
    // send booking info
    let loader = this.loadingCtrl.create({
      content: "Please wait..."
    });
    // show message
    let toast = this.toastCtrl.create({
      showCloseButton: true,
      cssClass: 'profile-bg',
      message: 'Your Data was Edited!',
      duration: 3000,
      position: 'bottom'
    });

    loader.present();

    try {


      console.log(this.app.userProfile.id);
      let data = {full_name: this.app.userProfile.full_name,
        email:      this.app.userProfile.email,
        address:    this.app.userProfile.address,
        city:       this.app.userProfile.city,
        state:      this.app.userProfile.state,
        user_type:  this.app.userProfile.user_type
      };
      await this.afStore.collection('users').doc(this.app.userProfile.id).set(data);
      await loader.dismiss();
    } catch (error) {
      await loader.dismiss();
      const alert: Alert = this.alertCtrl.create({title: 'Save Error',
        message: error.message,
        buttons: [{ text: 'Ok', role: 'cancel' }]});

      alert.dismiss();
    }

  }

}
