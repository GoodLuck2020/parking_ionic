import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {MenuItem} from '../../../interfaces/navigation';

@IonicPage({
  name: 'page-login-list',
  segment: 'extras/login-list',
})

@Component({
  selector: 'page-login-list',
  templateUrl: 'login-list.html',
})

export class LoginListPage {

  loginList: Array<MenuItem>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginList = [
      {title: 'Login 1', component: "page-login1", icon: 'log-in'},
      {title: 'Login 2', component: "page-login2", icon: 'log-in'},
      {title: 'Login 3', component: "page-login3", icon: 'log-in'},
      {title: 'Login 4', component: "page-login4", icon: 'log-in'},
      {title: 'Login 5 (Video background)', component: "page-login5", icon: 'log-in'}
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginListPage');
  }

  openPage(page) {
    console.log(page);
      this.navCtrl.push(page);
  }
}
