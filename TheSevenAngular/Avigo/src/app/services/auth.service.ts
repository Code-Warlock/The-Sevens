import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { pwd } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  
 signin() {
   this.auth.auth.signInWithEmailAndPassword("iopara2002@gmail.com", pwd)
    .then(() => console.log('signed in successfully!'))
    .catch(err => console.error(err.message))
 }

 signout() {
   this.auth.auth.signOut();
 }

}
