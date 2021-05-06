import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavigationComponent } from './modules/shared/navigation/navigation.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'githuber',
        loadChildren: () => import('./modules/githuber/githuber.module').then(m => m.GithuberModule)
      },
      {
        path: 'user',
        loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
      }
    ]
  }
  ,
  {
    path: '',
    component: NavigationComponent,
    outlet: 'navigation-bar'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
