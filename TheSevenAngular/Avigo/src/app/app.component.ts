import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Avigo';

  constructor(private auth: AuthService) {}
  // description = 'Avigo-Investment';
  
  // itemValue = '';
  // items: Observable<any[]>;

  // constructor(public db: AngularFireDatabase){
  //   this.items = db.list('items').valueChanges();
  // }

  // onSubmit(){
  //   this.db.list('items').push({ content: this.itemValue });
  //   this.itemValue = '';
  // }

  ngOnInit() {
    this.auth.signin();
  }

  ngOnDestroy() {
     this.auth.signout();
  }

}
