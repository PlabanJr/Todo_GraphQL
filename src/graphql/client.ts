import AsyncStorage from '@react-native-community/async-storage'
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink, Observable } from "apollo-link";
import { onError } from "apollo-link-error";

const httpLink = "https://expressts-graphql.herokuapp.com/graphql"
const cache = new InMemoryCache()

const request = async (operation: any) => {
    const token = await AsyncStorage.getItem("userToken");

    if (token)
        operation.setContext({
            headers: {
                authorization: `Bearer ${token}`
            }
        });
};

const requestLink = new ApolloLink(
    (operation, forward) =>
        new Observable(observer => {
            let handle: any;

            Promise.resolve(operation)
                .then(oper => request(oper))
                .then(() => {
                    handle = forward(operation).subscribe({
                        next: observer.next.bind(observer),
                        error: observer.error.bind(observer),
                        complete: observer.complete.bind(observer)
                    });
                })
                .catch(observer.error.bind(observer));

            return () => {
                if (handle) handle.unsubscribe();
            };
        })
);

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
    },
    query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
    },
}

const client = new ApolloClient({
    link: ApolloLink.from([
        onError(({ graphQLErrors, networkError }) => {
            if (networkError) {
                console.log(networkError.result.errors, "NET ERR")
                return
            }
            if (graphQLErrors) {
                graphQLErrors.map(({ message }) => console.log(message, 'GRAPHQL ERR'))
                return
            }
        }),
        requestLink,
        new HttpLink({
            uri: httpLink,
            credentials: "include"
        })

    ]),
    cache,
    defaultOptions: defaultOptions,
});


export default () => {
    return client;
};

