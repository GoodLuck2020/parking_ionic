import {Injectable} from "@angular/core";
//import {LOTS} from "../mocks/mock-lots";
import {AngularFirestore} from "angularfire2/firestore"


@Injectable()
export class LotService {
  lots: Array<any>;
  items: Map<string, any>;
  searchedLots: Array<any>;

  favoriteCounter: number = 0;
  favorites: Array<any> = [];
  bookingCounter: number = 0;
  bookings: Array<any> = [];

  constructor(public afStore: AngularFirestore) {
    //this.lots = LOTS;
    this.items = new Map();
    this.lots = new Array();

  }

  getPlaces(): Promise<boolean> {
    this.lots = [];
    return new Promise((resolve, reject) => {
      this.afStore.collection('places').ref.get().then(querySnapshot => {
        querySnapshot.forEach(doc => {
          let data = doc.data();
          data.id = doc.id;
          data.idx = this.lots.length;
          this.lots.push(data);

          let key1 = data.address1;
          let key2 = data.address1 + ' - ' + data.address2;
          let key3 = data.address;


          if(! this.items.has(key1)) {
            this.items.set(key1, [data.address1]);
          }

          if(! this.items.has(key2)) {
            this.items.set(key2, [data.address1, data.address2]);
          }

          if(! this.items.has(key3)) {
            this.items.set(key3, [data.address]);
          }
        });

        resolve(true);
      });
    });
  }



  getItems() {
    return this.items;
  }

  getAll() {
    console.log(this.lots);
    return this.lots;
  }

  getItem(id) {
    return this.lots[id];
  }

  remove(item) {
    this.lots.splice(this.lots.indexOf(item), 1);
  }

  /////
  //For Search and Favorites
  ////
  findAll() {
    return Promise.resolve(this.lots);
  }

  findById(id) {
    return Promise.resolve(this.lots[id - 1]);
  }

  findByName(searchKey: string) {
    let key: string = searchKey.toUpperCase();
    console.log(key);
    return this.lots.filter((property: any) =>
      (property.address1 + ' ' + property.address2 +  ' ' + property.address).toUpperCase().indexOf(key) > -1);
  }

  getFavorites() {
    return Promise.resolve(this.favorites);
  }

  getBookings() {
    return Promise.resolve(this.bookings);
  }

  favorite(lot) {
    this.favoriteCounter = this.favoriteCounter + 1;
    let exist = false;

    if (this.favorites && this.favorites.length > 0) {
      this.favorites.forEach((val, i) => {
        if (val.lot.id === lot.id) {
          exist = true
        }
      });
    }

    if (!exist) {
      this.favorites.push({id: this.favoriteCounter, lot: lot});
    }

    return Promise.resolve();
  }

  booking(lot) {
    this.bookingCounter = this.bookingCounter + 1;
    let existb = false;

    if (this.bookings && this.bookings.length > 0) {
      this.bookings.forEach((val, i) => {
        if (val.lot.id === lot.id) {
          existb = true
        }
      });
    }

    if (!existb) {
      this.bookings.push({id: this.bookingCounter, lot: lot});
    }

    return Promise.resolve();
  }

  unfavorite(favorite) {
    let index = this.favorites.indexOf(favorite);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
    return Promise.resolve();
  }
}
