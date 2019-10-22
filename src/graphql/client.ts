import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { createHttpLink } from 'apollo-link-http';

const URL = "https://expressts-graphql.herokuapp.com/graphql"

export const client = new ApolloClient({
    link: createHttpLink({ uri: URL }),
    cache: new InMemoryCache()
});