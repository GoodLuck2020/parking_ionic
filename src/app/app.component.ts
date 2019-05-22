import { Component, ViewChild } from "@angular/core";
import { Platform, Nav } from "ionic-angular";
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Keyboard } from '@ionic-native/keyboard';
import { Storage } from "@ionic/storage"


export interface MenuItem {
    title: string;
    component: any;
    icon: string;
}

@Component({
  templateUrl: 'app.html'
})

export class easyParkingApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = "page-login";
  showMenu: boolean = true;
  userProfile: any;
  public coordinate: any;
  // rootNavCtrl: NavController;

  appMenuItems: Array<MenuItem>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public keyboard: Keyboard,
    public local: Storage
  ) {
    this.initializeApp();
    // this.app.getRootNavs()[0]
    // this.app._rootNavs.map(page => {
    //   console.log(page)
    // })
    // console.log(this.nav)

    this.userProfile = {
      id: "",
      email: "",
      full_name: "--",
      address: "",
      city: "",
      state: "",
      user_type: ""
    }
    this.appMenuItems = [
      {title: 'Home', component: 'page-home', icon: 'home'},
    //  {title: 'Rent a Spot', component: 'page-search-cars', icon: 'car'},
      {title: 'Activities', component: 'page-search-trips', icon: 'beer'},
      {title: 'Favorites', component: 'page-favorite-list', icon: 'heart'},
      {title: 'Reserved Parking List', component: 'page-booking-list', icon: 'briefcase'},
      {title: 'Support', component: 'page-support', icon: 'help-buoy'},
    //  {title: 'Extra Pages (with Animations)', component: 'page-custom-pages', icon: 'albums'}
    ];
  }

  initializeApp() {

    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      //*** Control Splash Screen
      // this.splashScreen.show();
      // this.splashScreen.hide();

      //*** Control Status Bar
      this.statusBar.styleDefault();
      this.statusBar.overlaysWebView(false);

      //*** Control Keyboard
      this.keyboard.disableScroll(true);
    });

    this.local.get('userProfile').then(data => {
      this.userProfile = data;
    });
    //console.log(this.userProfile);
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  logout() {
    this.nav.setRoot('page-login');
  }

  editProfile() {
    this.nav.setRoot('page-edit-profile');
  }

}
