import { ApolloClient, InMemoryCache } from "@apollo/client";
import { BASE_URL } from "../api/api";

const client = new ApolloClient({
  uri: `${BASE_URL}/api/graphql`,
  cache: new InMemoryCache(),
});

export default client;
