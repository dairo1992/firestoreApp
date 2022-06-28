import { Injectable } from '@angular/core';
// import firebase from "firebase/compat/app";
import { AngularFireAuth} from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) { }

  loginUser(email: string, password: string){
    // return firebase.auth().signInWithEmailAndPassword(email, password);
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signUp(email: string, password: string){
    // return firebase.auth().createUserWithEmailAndPassword(email, password);
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string){
    // return firebase.auth().sendPasswordResetEmail(email);
    return this.auth.sendPasswordResetEmail(email);
  }

  logout(){
    // return firebase.auth().signOut();
    return this.auth.signOut();
  }

  getUser(){
    // return firebase.auth().currentUser;
    return this.auth.currentUser;
  }

  hasUser(){
    // return firebase.auth().
    return this.auth.authState;
  }
}
