import {Component, OnInit} from "@angular/core";
import {FormGroup, Validators, FormBuilder} from '@angular/forms';
import {IonicPage, NavController, MenuController} from "ionic-angular";
import { AuthProvider } from "../../providers/auth";


@IonicPage({
  name: 'page-register',
  segment: 'register',
  priority: 'high'
})

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage implements OnInit {
  public onRegisterForm: FormGroup;

  constructor(private authProvider: AuthProvider, private _fb: FormBuilder, public nav: NavController, public menu: MenuController,) {
    this.menu.swipeEnable(false);
    this.menu.enable(false);
  }

  ngOnInit() {
    this.onRegisterForm = this._fb.group({
      fullName: ['', Validators.compose([
        Validators.required
      ])],
      email: ['', Validators.compose([
        Validators.required
      ])],
      password: ['', Validators.compose([
        Validators.required
      ])]
    });
  }

  // register and go to home page
  async register() {
    await this.authProvider.signupUser(this.onRegisterForm.value.email, this.onRegisterForm.value.password, this.onRegisterForm.value.fullName);
    this.nav.setRoot('page-login');
  }

  // go to login page
  login() {
    this.nav.setRoot('page-login');
  }
}
