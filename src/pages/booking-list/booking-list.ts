import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {LotService} from "../../providers/lot-service";
import {LotDetailPage} from "../lot-detail/lot-detail";

@IonicPage({
  name: 'page-booking-list',
  segment: 'booking-list'
})

@Component({
    selector: 'page-booking-list',
    templateUrl: 'booking-list.html'
})
export class BookingListPage {

    bookings: Array<any> = [];

    constructor(public navCtrl: NavController, public service: LotService) {
        this.getBookings();
        // console.log(this.favorites);
    }

    itemTapped(booking) {
        this.navCtrl.push(LotDetailPage, booking);
    }

    getBookings() {
        this.service.getBookings()
            .then(data => { this.bookings = data; });
    }

}
