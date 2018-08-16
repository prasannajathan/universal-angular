import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SchoollistComponent } from './schoollist/schoollist.component'
import { SchooldetailsComponent } from './schooldetails/schooldetails.component'

const routes: Routes = [
  {
    path: "",
    redirectTo: "schools",
    pathMatch: "full"
  },
  {
    path: "schools",
    component: SchoollistComponent
  },
  {
    path: "school/:id",
    component: SchooldetailsComponent
  }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
