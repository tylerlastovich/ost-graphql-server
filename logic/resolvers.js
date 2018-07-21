import { merge } from 'lodash';

// Import Resolvers

// Import APIs
import ost from './apis/ost';

const resolvers = merge(
    ost
);
export default resolvers;
