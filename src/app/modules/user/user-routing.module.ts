import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component';
import {UserComponent} from './user.component';

@NgModule({
    imports: [
      RouterModule.forChild([
        {
          path: '',
          redirectTo: 'user/login',
          pathMatch: 'full'
        },
        {
          path: 'user',
          component: UserComponent,
          children: [
            {
              path: '**',
              redirectTo: '/user/login',
              pathMatch: 'full'
            },
            {
              path: 'login',
              component: UserLoginComponent
            }
          ]
        }
      ])
    ],
  exports: [RouterModule]
})

export class UserRoutingModule {}
