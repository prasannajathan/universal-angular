import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule, TransferState, makeStateKey } from '@angular/platform-browser';

import { GraphQLModule } from './graphql.module';

import { AppComponent } from './app.component';
import { SchoollistComponent } from './schoollist/schoollist.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoollistComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'tour-of-heroes' }),
    GraphQLModule
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
