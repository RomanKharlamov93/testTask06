import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GithuberRoutingModule } from './githuber-routing.module';
import { PageFavoritesComponent } from './page-favorites/page-favorites.component';
import { PageProjectsComponent } from './page-projects/page-projects.component';
import { GithuberComponent } from './githuber.component';



@NgModule({
  declarations: [
    PageFavoritesComponent,
    PageProjectsComponent,
    GithuberComponent
  ],
  imports: [
    CommonModule,
    GithuberRoutingModule
  ],
})

export class GithuberModule {}

