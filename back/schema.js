import {
    makeExecutableSchema
} from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = [`
    type Report {
        id: String
        title: String
        author: String
        description: String
        topic: String
        url: String
        voteCount: Int   
    }
    type Query {
        allReports(searchTerm: String): [Report]
        report(id: String!): Report 
    }
    type Mutation {
        addReport (title: String!, author: String!, description: String, topic: String!, url: String): Report
        upvote(id: String!):Report
        downvote(id: String!):Report
    }
`];


const schema = makeExecutableSchema({
    typeDefs,
    resolvers
})

export default schema;