import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
import resolvers from './resolvers.js';
import typeDefs from './type-defs.js';

const schema = makeExecutableSchema({ typeDefs, resolvers});

export default schema;
