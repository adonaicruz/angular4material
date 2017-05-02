import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { UsersModule } from './users/users.module';
import { TestModule } from './test/test.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout.component';

import { MaterialModule } from '@angular/material';
 
import { AuthService} from './login/auth.service';
import { AuthGuard } from './guards/auth.guard';

// other imports 


@NgModule({
  imports: [
    BrowserModule, 
    HttpModule, 
    AppRoutingModule, 
    AboutModule, 
    HomeModule, 
    UsersModule, 
    TestModule,
    SharedModule.forRoot(),
    MaterialModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [AppComponent,LoginComponent,LogoutComponent],
  providers: [
    {
      provide: APP_BASE_HREF,
      useValue: '<%= APP_BASE %>'
    },
    AuthService,
    AuthGuard
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
