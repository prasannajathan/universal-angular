import { BrowserModule, BrowserTransferStateModule  } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SchoollistComponent } from './schoollist/schoollist.component';
import { SchooldetailsComponent} from './schooldetails/schooldetails.component';

import { GraphQLModule } from './graphql.module';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    SchoollistComponent,
    SchooldetailsComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'app-component'}),
    BrowserTransferStateModule,
    GraphQLModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}