import {ErrorHandler, NgModule} from "@angular/core";
import {IonicApp, IonicErrorHandler, IonicModule} from "ionic-angular";
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {IonicStorageModule} from '@ionic/storage';

import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Keyboard} from '@ionic-native/keyboard';

import {LotService} from "../providers/lot-service";
import {PlaceService} from "../providers/place-service";
import {ActivityService} from "../providers/activity-service";
import {CarService} from "../providers/car-service";
import {TripService} from "../providers/trip-service";

import { easyParkingApp} from "./app.component";
import { AuthProvider } from '../providers/auth';
import { firebaseConfig } from "./credentials"

import { AngularFireModule} from "angularfire2"
import { AngularFireAuthModule} from "angularfire2/auth"
import { AngularFirestoreModule} from "angularfire2/firestore"
import { AngularFireDatabaseModule} from "angularfire2/database"


@NgModule({
  declarations: [
    easyParkingApp
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicModule.forRoot(
      easyParkingApp,
      {
        preloadModules: true,
        scrollPadding: false,
        scrollAssist: true,
        autoFocusAssist: false
      }
    ),
    IonicStorageModule.forRoot({
      name: '__easyParkingDB',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    easyParkingApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Keyboard,
    LotService,
    PlaceService,
    ActivityService,
    CarService,
    TripService,
    CarService,
    TripService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider
  ]
})

export class AppModule {
}
