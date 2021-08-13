import AsyncStorage from '@react-native-community/async-storage';
import {
  Network,
  RecordSource,
  Store,
  Environment,
  RequestParameters,
  Variables,
} from 'relay-runtime';

async function fetchQuery(operation: RequestParameters, variables: Variables) {
  const token = await AsyncStorage.getItem('token');

  return fetch('http://192.168.0.6:4000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  }).then(response => response.json());
}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const environment = new Environment({ network, store });

export default environment;
