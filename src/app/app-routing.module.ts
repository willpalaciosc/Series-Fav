import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiographyListComponent } from './series/biography-list/biography-list.component';
import { SeriesListComponent } from './series/series-list/series-list.component';

const routes: Routes = [
  {
  path: "biography-list",
  component: BiographyListComponent
  },

  {
  path: "series-list",
  component: SeriesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

