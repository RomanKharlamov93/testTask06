import { NgModule } from '@angular/core';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './controls/services/user.service';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    UserRoutingModule,
    ReactiveFormsModule,
    CommonModule
  ],
  exports: [],
  providers: [
    UserService
  ],
  declarations: [
    UserLoginComponent,
    UserComponent
  ]
})

export class UserModule {}
