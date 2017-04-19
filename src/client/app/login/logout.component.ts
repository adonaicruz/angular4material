import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  moduleId: module.id,
  selector: 'sd-logout',
  template:''
})
export class LogoutComponent implements OnInit {
  
  constructor(public authService:AuthService) {}
  
  ngOnInit() {
    this.authService.logout();
  }

}
