import AsyncStorage from '@react-native-community/async-storage'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { setContext } from 'apollo-link-context';
import { createHttpLink } from 'apollo-link-http';

const { getItem } = AsyncStorage

const httpLink = createHttpLink({ uri: "https://expressts-graphql.herokuapp.com/graphql" })

const authLink = setContext((_, { headers }) => {
    const token = getItem('userToken');

    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});