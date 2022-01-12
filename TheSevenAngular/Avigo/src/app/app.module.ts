import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MessageService } from './message.service';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule, } from '@angular/fire/firestore';
import { AngularFireAuthModule  } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { ComingSoonComponent } from './coming-soon/coming-soon.component'
import { fireConfig } from 'src/environments/environment.prod';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    ContactComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(fireConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [
    MessageService, AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
