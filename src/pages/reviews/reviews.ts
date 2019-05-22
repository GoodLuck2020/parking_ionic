import {Component} from "@angular/core";
import {IonicPage, NavController} from "ionic-angular";
import {LotService} from "../../providers/lot-service";

@IonicPage({
  name: 'page-reviews'
}
})

@Component({
  selector: 'page-reviews',
  templateUrl: 'reviews.html'
})

export class ReviewsPage {
  // tabs
  public recent: any;
  public favorable: any;
  public critical: any;

  // lot info
  public lot: any;

  constructor(public nav: NavController, public lotService: LotService) {
    // set tabs
    this.recent = 'tabs-reviews';
    this.favorable = 'tabs-reviews';
    this.critical = 'tabs-reviews';

    // set lot data
    this.lot = lotService.getItem(1);
  }
}
