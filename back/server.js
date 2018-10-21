import express from 'express';
import bodyParser from 'body-parser';
import {
    graphqlExpress,
    graphiqlExpress
} from 'apollo-server-express';
import cors from 'cors';

import mongoose from 'mongoose';

import schema from './schema';

const app = express();

app.use(cors());

mongoose.connect('mongodb://localhost/graphqlserver');

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connection {++}');
});

app.use('/graphiql', graphiqlExpress({
    endpointURL: '/graphql'
}));

app.use('/graphql', bodyParser.json(), graphqlExpress({
    schema
}));

app.listen(4000, () => console.log('server running on 4000 port'));