import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

interface Note{
  first: string;
  last: string;
  email: string;
  phone: string;
  interest: string;
  residence: string;
  feedback: string;
  id: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent implements OnInit {
  signupForm: FormGroup;
  notesCollection: AngularFirestoreCollection<Note>
  notes: Observable<Note[]>

  submitted = false

  constructor(public db: AngularFirestore) {
        this.signupForm = new FormGroup({
          'first' : new FormControl('',  Validators.required),
          'last' : new FormControl(null,  Validators.required),
          'email' : new FormControl(null, [Validators.required, Validators.email]),
          'phone' : new FormControl(null, [Validators.required, Validators.maxLength(11) ,Validators.minLength(11)]),
          'interest' : new FormControl(null, Validators.required),
          'residence' : new FormControl(null, Validators.required,),
          'feedback' : new FormControl(null, Validators.required,),
      });

      // this.items = db.list('items').valueChanges();
      this.notesCollection = this.db.collection('notes')
      this.notes = this.notesCollection.valueChanges();
   }

  ngOnInit() {
  }



  onSubmit(){
    const note = this.signupForm.value;
    const id = this.db.createId();
    note.id = id;
    console.log(note);
    this.notesCollection.doc<Note>(`${ note.id }`).set(note)
      .then(_ => console.log('document added successfully!'))
      .catch(err => console.error('Error: ', err.message))
      this.onSuccessfulSbmit();
    this.signupForm.reset();
    
  }

  onSuccessfulSbmit(){
    this.submitted = true
  }
}


