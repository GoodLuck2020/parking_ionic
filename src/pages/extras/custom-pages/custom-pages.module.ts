import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomPagesPage } from './custom-pages';

@NgModule({
  declarations: [
    CustomPagesPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomPagesPage),
  ],
})
export class CustomPagesPageModule {}
