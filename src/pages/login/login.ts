import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {IonicPage, NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {AuthProvider} from "../../providers/auth"
import firebase from 'firebase/app'
import {Storage} from "@ionic/storage";


import {
  Alert,
  Loading,
  LoadingController
} from 'ionic-angular'
import {easyParkingApp} from "../../app/app.component";

@IonicPage({
  name: 'page-login',
  segment: 'login',
  priority: 'high'
})

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage implements OnInit {

  public geolocation: Geolocation;
  public onLoginForm: FormGroup;
  constructor(private authProvider: AuthProvider,
              private app: easyParkingApp,
              private _fb: FormBuilder,
              public nav: NavController,
              public forgotCtrl: AlertController,
              public menu: MenuController,
              public loadingCtrl: LoadingController,
              public local: Storage,
              public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
  }

  ngOnInit() {
    this.onLoginForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });

    /** setting default value **/
    this.onLoginForm.get('email').setValue('amazingskill2014@outlook.com');
    this.onLoginForm.get('password').setValue('123456');
  }

  // go to register page
  register() {
    this.nav.setRoot('page-register');
  }

  // login and go to home page
  async login() {

    const loading: Loading = this.loadingCtrl.create();
    loading.present();
    const email: string = this.onLoginForm.value.email;
    const password: string = this.onLoginForm.value.password;

    try {
      const loginUser: firebase.User = await this.authProvider.loginUser(
        email,
        password
      );

      this.authProvider.fillUser(loginUser.uid).then(sfDoc => {

        console.log('fillUser');
        let userObject = sfDoc.data();
        this.app.userProfile = {
          id: loginUser.uid,
          email: userObject.email,
          full_name: userObject.full_name,
          address: userObject.address,
          city: userObject.city,
          state: userObject.state,
          user_type: userObject.user_type
        };

        console.log(this.app.userProfile);
        this.local.set('userProfile', this.app.userProfile);
        loading.dismiss();
        this.nav.setRoot('page-home');
      });


    } catch(error) {
      await loading.dismiss();
      const alert: Alert = this.forgotCtrl.create({
        message: 'Error: ' + error.message ,
        buttons: [{ text: 'Ok', role: 'cancel' }]
      });
      alert.present();
    }
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}
