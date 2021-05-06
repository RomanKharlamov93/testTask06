import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './modules/shared/navigation/navigation.component';
import { AuthGuard } from './modules/shared/guards/auth.guard';


const routes: Routes = [
  {
    path: 'user',
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: '',
    children: [
      {
        path: '**',
        redirectTo: 'githuber',
        pathMatch: 'full'
      },
      {
        path: 'githuber',
        loadChildren: () => import('./modules/githuber/githuber.module').then(m => m.GithuberModule),
        // canActivate: [AuthGuard]
      },
      {
        path: '',
        component: NavigationComponent,
        outlet: 'navigation-bar'
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
