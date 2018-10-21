import { Injectable } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {map, filter} from 'rxjs/operators';
import { Report, Query } from './models/types';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private apollo: Apollo) {}

  getAllRepors(searchTerm: string){
    return this.apollo.watchQuery<Query>({
      pollInterval: 500,
      query: gql`
      query allReports($searchTerm: String){
        allReports(searchTerm: $searchTerm){
          id,
          title,
          author,
          description,
          topic,
          url,
          voteCount
        }
      }
      `,
      variables : {
        searchTerm: searchTerm
      }
    })
    .valueChanges
    .pipe(
      map(res => res.data.allReports)
      );
  }

  upvoteReport(id: string){
    return this.apollo.mutate({
      mutation: gql`
      mutation upvote($id: String!){
        upvote(id: $id){
          id,
          title,
          voteCount
        }
      }
      `,
      variables: {
        id: id
      }
    });
  }

  downvoteReport(id: string){
    return this.apollo.mutate({
      mutation: gql`
      mutation downvote($id: String!){
        upvote(id: $id){
          id,
          title,
          voteCount
        }
      }
      `,
      variables: {
        id: id
      }
    });
  }
}
