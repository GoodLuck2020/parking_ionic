import {Injectable} from "@angular/core";
import {PLACES} from "../mocks/mock-places";
import {AngularFirestore} from "angularfire2/firestore";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaceService {
  private places: any;

  constructor(private afStore: AngularFirestore) {
    /*this.places = PLACES;*/
    this.afStore.collection('places').ref.get().then(data=> {
      this.places = data;
    });
  }

  getPlaces() {
    this.afStore.collection('places').ref.get().then(data=> {
      this.places = data;
    });
  }

  getAll() {
    return this.places;
  }

  getItem(id) {
    for (var i = 0; i < this.places.length; i++) {
      if (this.places[i].id === parseInt(id)) {
        return this.places[i];
      }
    }
    return null;
  }

  remove(item) {
    this.places.splice(this.places.indexOf(item), 1);
  }
}
