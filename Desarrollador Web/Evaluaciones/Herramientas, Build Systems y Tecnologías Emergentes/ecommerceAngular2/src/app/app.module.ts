import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpService } from './http.service';
import { DataService } from './data.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { NavegacionComponent } from './navegacion/navegacion.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavegacionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
  ],
  providers: [HttpService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
