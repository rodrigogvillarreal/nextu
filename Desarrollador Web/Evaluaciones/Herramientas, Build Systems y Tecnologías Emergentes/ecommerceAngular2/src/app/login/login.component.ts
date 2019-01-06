import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  usuarios: Observable<any[]>;

  constructor(db: AngularFirestore) { 
    this.usuarios = db.collection('usuarios').valueChanges();
  }

  validarUsuario(form){
    console.log(form.value.email);
  }

}
