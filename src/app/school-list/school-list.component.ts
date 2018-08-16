import { Component, OnInit } from '@angular/core';

import { Apollo, QueryRef } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { School, PopularSchools } from '../types';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {
  schoolsRef: QueryRef<PopularSchools>;
  schools: Observable<School[]>;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.schoolsRef = this.apollo.watchQuery<PopularSchools>({
      query: gql`
      query {
        getpopularschools {
          Id
          Name
          Caption
          Location {
            City
          }
        }
      }
      `
    });

    this.schools = this.schoolsRef
      .valueChanges
      .pipe(
        map(result => result.data.getpopularschools)
      );
  }

  refresh() {
    this.schoolsRef.refetch()
  }
}

