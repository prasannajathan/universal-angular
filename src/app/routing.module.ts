import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchoolListComponent } from './school-list/school-list.component'
import { SchoolDetailsComponent } from './school-details/school-details.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: "schools",
    pathMatch: "full"
  },
  {
    path: "schools",
    component: SchoolListComponent
  },
  {
    path: "school/:id",
    component: SchoolDetailsComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
