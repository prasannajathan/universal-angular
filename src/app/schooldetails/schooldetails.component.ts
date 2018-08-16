import { Component, OnInit } from '@angular/core';

import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { School, AllSchools } from '../types';

@Component({
  selector: 'app-schooldetails',
  templateUrl: './schooldetails.component.html',
  styleUrls: ['./schooldetails.component.css']
})
export class SchooldetailsComponent implements OnInit {
  schoolRef: QueryRef<AllSchools>;
  schools: Observable<School[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.schoolRef = this.apollo.watchQuery<AllSchools>({
      query: gql`
      query {
        getallschools {
          Id
          Name
          Caption
          Location {
            AddressLine1
            AddressLine2
            City
            CountryCode
            CountryId
            CountryName
            Latitude
            LocationId
            Longitude
            SchoolId
            State
            StateId
          }
        }
      }
      `
    });

    this.schools = this.schoolRef
      .valueChanges
      .pipe(
        map(result => result.data.getallschools)
      );
  }

  refresh() {
    this.schoolRef.refetch()
  }
}

