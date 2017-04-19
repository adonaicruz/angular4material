
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { UsersRoutingModule } from './users-routing.module';
import { MaterialModule } from '@angular/material';

import { UsersComponent } from './users.component';
import { UsersService } from './users.service';

@NgModule({
  imports: [CommonModule,SharedModule,UsersRoutingModule],
  declarations: [UsersComponent],
  exports: [UsersComponent],
  providers:[UsersService]
})
export class UsersModule { }
