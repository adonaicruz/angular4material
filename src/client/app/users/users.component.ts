import { Component } from '@angular/core';
import { UsersService } from './users.service';
import { AuthService } from '../login/auth.service';
import { User } from './user';

@Component({
  moduleId: module.id,
  selector: 'sd-users',
  templateUrl: 'users.component.html',
  styleUrls: ['users.component.css']
})

export class UsersComponent implements OnInit{
  user: any = {group:'USER'};
  users: User[];
  currentUser: User;
  constructor(public us: UsersService, private authService:AuthService) {
    this.currentUser = authService.currentUser();
    us.getAll().then(users => this.users = users)
  }
  
  ngOnInit() { }

  search(term:string){
    this.us.search(term).then(users => this.users = users);
  }

  create(): boolean {
    this.us.create(this.user).then(user => {
      this.users.push(user);
    });;
    
    this.user = {group:'USER'};
    return false;
  }

}
