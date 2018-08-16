import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SchoolListComponent } from './school-list/school-list.component';
import { SchoolDetailsComponent } from './school-details/school-details.component';

import { GraphQLModule } from './graphql.module';
import { RoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SchoolListComponent,
    SchoolDetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'app-component' }),
    BrowserTransferStateModule,
    GraphQLModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }