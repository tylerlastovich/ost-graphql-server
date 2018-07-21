import express from 'express';
import { graphqlExpress, graphiqlExpress } from 'apollo-server-express';
import bodyParser from 'body-parser';
import schema from './logic/schema';
import compression from 'compression';
import { ApolloEngine } from 'apollo-engine';
import cors from 'cors';
import { APOLLO_ENGINE_KEY, GRAPHQL_PORT } from './logic/conf';

const graphQLServer = express();

// IF YOU GET CORS ISSUES UNCOMMENT THIS BLOCK ----
// var whitelist = [
//     '<YOUR-DOMAIN.COM:>' + GRAPHQL_PORT,
// ];
// var corsOptions = {
//     origin: function(origin, callback){
//         var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
//         callback(null, originIsWhitelisted);
//     },
//     credentials: true
// };
// graphQLServer.use(cors(corsOptions));

const engine = new ApolloEngine({
    apiKey: APOLLO_ENGINE_KEY,
});

graphQLServer.use(compression());
graphQLServer.use('/graphql', bodyParser.json(), graphqlExpress({
  schema,
  tracing: true,
  cacheControl: true
 }));
graphQLServer.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

engine.listen({
    port: GRAPHQL_PORT,
    graphqlPaths: ['/graphql'],
    expressApp: graphQLServer,
    launcherOptions: {
        startupTimeout: 3000,
    },
}, () => {
    console.log("GraphiQL is now available at http://localhost:" + GRAPHQL_PORT + "/graphiql");
});
