import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService],
})
export class LoginComponent {

  usuarios : string[] = [];
  items: Observable<any[]>;

  constructor(private dataService : DataService) { 
    
  }

  ngOnInit() {
    this.dataService.getUsers();
  }

  validarUsuario(form){
    console.log(form.value.email);
  }

}
