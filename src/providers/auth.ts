import { Injectable } from '@angular/core';
import firebase from 'firebase';
import { User } from '@firebase/auth-types';
import { AngularFireAuth } from "angularfire2/auth"
import {AngularFirestore} from "angularfire2/firestore";
import DocumentSnapshot = firebase.firestore.DocumentSnapshot;



/**
 * Author Provider
 */
@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth, private afStore: AngularFirestore) {}


  /**
   * Checking Login
   * @param {string} email
   * @param {string} password
   * @returns {Promise<User>}
   */
  loginUser(email: string, password: string): Promise<User> {

    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  fillUser(uid: string): Promise<DocumentSnapshot> {
    return this.afStore.collection('users').doc(uid).ref.get();
  }


  /**
   * Create new user
   * @param {string} email
   * @param {string} password
   * @returns {Promise<User>}
   */
  async signupUser(email: string, password: string, fullname: string): Promise<User> {

    try {
      const newUser: User = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      await this.afStore.collection('users').doc(newUser.uid).set({full_name: fullname, email: email, address: '', city: '', user_type: 'customer', state: ''});
      return newUser;

    } catch (error) {

      throw error;

    }
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    return firebase.auth().signOut();
  }
}
