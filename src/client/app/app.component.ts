import { Component } from '@angular/core';
import { Config } from './shared/config/env.config';
import './operators';

import { AuthService } from './login/auth.service';

@Component({
  moduleId: module.id,
  selector: 'sd-app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent {

  showTemplate:boolean = (localStorage.getItem('currentUser')) ? true : false;

  constructor(private authService:AuthService) {
    // console.log('Environment config', Config);
  }

  ngOnInit(){  
    this.authService.authenticatedEmitter.subscribe(
      show => this.showTemplate = show
    )
  }
}
