import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'sd-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {
  
  user: any[] = [];

  constructor(public authService:AuthService) { 
    
  }
  
  ngOnInit() {
    
  }
  login(){
    this.authService.login(this.user.login,this.user.password);
  }

}
