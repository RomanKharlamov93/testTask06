import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserComponent} from './user.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          component: UserComponent,
          children: [
            {
              path: 'login',
              component: UserLoginComponent
            },
            {
              path: '**',
              redirectTo: '/user/login',
              pathMatch: 'full'
            }
          ]
        }
      ])
    ],
  exports: [RouterModule]
})

export class UserRoutingModule {}
