import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DataService],
})
export class LoginComponent {

  usuarios : string[] = [];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.usuarios = this.dataService.getUsers();
  }

  enviarForm(form){
    console.log(form);
  }

}
