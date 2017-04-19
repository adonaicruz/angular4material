import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { AuthGuard } from '../guards/auth.guard';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'users', component: UsersComponent, canActivate: [AuthGuard]}
    ])
  ],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
