import { Component, ViewChild } from '@angular/core';
import { IonicPage, Slides, NavController } from 'ionic-angular';


@IonicPage({
  name: 'page-walkthrough',
  segment: 'extras/walkthrough'
})

@Component({
  selector: 'page-walkthrough',
  templateUrl: 'walkthrough.html',
})
export class WalkthroughPage {
	@ViewChild(Slides) slides: Slides;
  showSkip = true;
  dir: string = 'ltr';

  slideList: Array<any> = [
    {
      title: "What is Easy<strong>Parking</strong>?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
      image: "assets/img/ionbooking-ico.png",
    },
    {
      title: "Why EasyParking?",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
      image: "assets/img/ionbooking-ico.png",
    },
    {
      title: "Your Parking near the action is coming!",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus, dui accumsan cursus lacinia, nisl risus.",
      image: "assets/img/ionbooking-ico.png",
    }
  ];

  constructor(public navCtrl: NavController) {
  }

  onSlideNext() {
    this.slides.slideNext(300)
  }

	onSlidePrev() {
    this.slides.slidePrev(300)
  }

  onLastSlide() {
  	this.slides.slideTo(3, 300)
  }

  openHomePage() {
  	this.navCtrl.setRoot('page-custom-pages');
  }

  openAuthPage() {
    this.navCtrl.setRoot('page-login-list');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WalkthroughPage');
  }

}
