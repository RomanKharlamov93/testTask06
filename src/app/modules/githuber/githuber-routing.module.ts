import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PageFavoritesComponent} from './page-favorites/page-favorites.component';
import {PageProjectsComponent} from './page-projects/page-projects.component';
import {GithuberComponent} from './githuber.component';

const routes: Routes = [
  {
    path: '',
    component: GithuberComponent,
    children: [
      {
        path: '',
        redirectTo: '/githuber/projects',
        pathMatch: 'full'
      },
      {
        path: 'favorites',
        component: PageFavoritesComponent
      },
      {
        path: 'projects',
        component: PageProjectsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class GithuberRoutingModule {}

