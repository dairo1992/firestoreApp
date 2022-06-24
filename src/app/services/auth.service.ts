import { Injectable } from '@angular/core';
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  // logout(email: string, password: string)
}
