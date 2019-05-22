import {Component} from "@angular/core";
import {IonicPage, NavController, App} from "ionic-angular";
import {LotService} from "../../providers/lot-service";

@IonicPage({
  name: 'tabs-reviews'
})

@Component({
  selector: 'page-tab-reviews',
  templateUrl: 'tab-reviews.html'
})
export class TabReviewsPage {
  // lot info
  public lot: any;

  // list of reviews
  public reviews = [];

  constructor(public nav: NavController, public lotService: LotService, public app:App) {
    // set lot data
    this.lot = lotService.getItem(1);

    // filter reviews
    let tabId = this.nav.id;
    for (let i = 0; i < this.lot.reviews.length; i++) {
      // if is recent tab
      if (tabId == 't0-0') {
        this.reviews.push(this.lot.reviews[i]);
      } else if (tabId == 't0-1') { // favorable tab
        if (this.lot.reviews[i].rating > 3) {
          this.reviews.push(this.lot.reviews[i]);
        }
      } else { // critical tab
        if (this.lot.reviews[i].rating <= 3) {
          this.reviews.push(this.lot.reviews[i]);
        }
      }
    }
  }

  // make array with range is n
  range(n) {
    return new Array(n);
  }

  // dismiss
  dismiss() {
    this.app.getRootNav().pop();
  }
}
