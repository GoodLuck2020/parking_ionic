import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IonicPage, NavController, AlertController, ToastController, MenuController } from 'ionic-angular';


@IonicPage({
  name: 'page-login5',
  segment: 'extras/login-list/login5',
})

@Component({
  selector: 'page-login5',
  templateUrl: 'login5.html',
})
export class Login5Page implements OnInit {
  public onLoginForm: FormGroup;

  constructor (
    private _fb: FormBuilder,
    public nav: NavController,
    public forgotCtrl: AlertController,
    public menu: MenuController,
    public toastCtrl: ToastController
  ) {
    this.menu.swipeEnable(false);
  }

  // ionViewDidLoad() {
  //   console.log('ionViewDidLoad Login1Page');
  // }

  ngOnInit() {
    this.onLoginForm = this._fb.group({
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
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
