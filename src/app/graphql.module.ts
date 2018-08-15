import { NgModule, PLATFORM_ID, Inject } from '@angular/core';
import { BrowserTransferStateModule, TransferState, makeStateKey } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
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
    private httpLink: HttpLink,
    @Inject(PLATFORM_ID) private _platformId: Object
  ) {
    this.cache = new InMemoryCache();
    this.link = this.httpLink.create({ uri });

    if (isPlatformBrowser(this._platformId)) {
      this.apollo.create({
        link: this.link,
        cache: this.cache
      });

      this.cache.restore(this.transferState.get<any>(STATE_KEY, null as any));
    }

    if (isPlatformServer(this._platformId)) {
      this.apollo.create({
        link: this.link,
        cache: this.cache,
        ssrMode: true
      });

      this.transferState.onSerialize(STATE_KEY, () =>
        this.cache.extract()
      );
    }
  }
}