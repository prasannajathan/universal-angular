import { NgModule } from '@angular/core';
import { BrowserTransferStateModule, TransferState, makeStateKey } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
// Apollo
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink, HttpLinkHandler } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const uri = 'http://qa.schoolapply.com:4000/graphql';

const STATE_KEY = makeStateKey<any>('apollo.state');

@NgModule({
  exports: [
    BrowserTransferStateModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ]
})
export class GraphQLModule {
  cache: InMemoryCache;
  link: HttpLinkHandler;

  constructor(
    private apollo: Apollo,
    private readonly transferState: TransferState,
    private httpLink: HttpLink
  ) {
    this.cache = new InMemoryCache();
    this.link = this.httpLink.create({ uri });

    this.apollo.create({
      link: this.link,
      cache: this.cache,
    });

    const isBrowser = this.transferState.hasKey<any>(STATE_KEY);

    if (isBrowser) {
      this.onBrowser();
    } else {
      this.onServer();
    }
  }

  onServer() {
    this.transferState.onSerialize(STATE_KEY, () =>
      this.cache.extract()
    );
  }

  onBrowser() {
    const state = this.transferState.get<any>(STATE_KEY, null);

    this.cache.restore(state);
  }
}