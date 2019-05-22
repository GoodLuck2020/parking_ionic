import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { LoginPage } from "../login/login";

@IonicPage({
  name: 'page-account',
  segment: 'account'
})

@Component({
  selector: 'page-account',
  templateUrl: 'account.html'
})
export class AccountPage {

  constructor(public nav: NavController) {
  }

  // logout
  logout() {
    this.nav.setRoot(LoginPage);
  }
}
