import {
  Network,
  RecordSource,
  Store,
  Environment,
  RequestParameters,
  Variables,
} from 'relay-runtime';

async function fetchQuery(operation: RequestParameters, variables: Variables) {
  return fetch('http://192.168.0.7:4000/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjgzNzUyMDksImV4cCI6MTYyODk4MDAwOSwic3ViIjoiXCI2MTBmMDg4YTdiMzJiNzNhOTg5NzllMDlcIiJ9.2goXACoME801AvNljDpTH-wJOxL-aNa4u_ZMZvYdpNw',
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
