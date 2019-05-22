import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginListPage } from './login-list';

@NgModule({
  declarations: [
    LoginListPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginListPage),
  ],
})
export class LoginListPageModule {}
