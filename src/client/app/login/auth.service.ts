import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { UsersService } from '../users/users.service';
import 'rxjs/Rx';

@Injectable()
export class AuthService {

  private user:any[];
  private isAuthenticated: boolean = false;
  authenticatedEmitter = new EventEmitter<boolean>();
  // constructor(private af:AngularFire) { }
  constructor(public us: UsersService,private router: Router) {
    this.authenticatedEmitter.emit(true);
    
  }
  ngOnInit(){
    this.authenticatedEmitter.emit(true);
    if(localStorage.getItem('currentUser')){
      
    }
  }

  login(username:string,password:string){
    this.us.getByLogin(username,password).then(Users => {
      if(Users.length > 0){
        this.authenticatedEmitter.emit(true);
        Users[0].password = '';
        username = '';
        localStorage.setItem('currentUser', JSON.stringify(Users[0]));
        this.router.navigate(['/']);
      }else{
        alert('Login  ou senha incorretos');
      }
    });
    
  }
  
  logout() {
      this.authenticatedEmitter.emit(false);
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
      
  }
  currentUser() {
    if(localStorage.getItem('currentUser')){
      return JSON.parse(localStorage.getItem('currentUser'));
    }else{
      return [];
    }
  }
}
