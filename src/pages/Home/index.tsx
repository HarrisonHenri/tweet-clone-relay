import React from 'react';
import { ActivityIndicator } from 'react-native';

import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useLazyLoadQuery } from 'relay-hooks';

import TweetsList from '../../components/TweetsList';
import { globalGonfig } from '../../data/config';
import {
  TweetsQuery as TweetsQueryType,
  TweetsQueryResponse,
} from '../../data/relay/__generated__/TweetsQuery.graphql';
import TweetsQuery from '../../data/relay/TweetsQuery';
import { Container, Button, PlusIcon } from './styles';

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

const Home = ({ navigation }: Props) => {
  const { tweetsQueryFirst } = globalGonfig;

  const { data, isLoading } = useLazyLoadQuery<TweetsQueryType>(TweetsQuery, {
    first: tweetsQueryFirst,
  });

  if (isLoading) {
    return <ActivityIndicator />;
  }

  return (
    <Container>
      <TweetsList data={data as TweetsQueryResponse} />
      <Button onPress={() => navigation.navigate('NewTweet')}>
        <PlusIcon />
      </Button>
    </Container>
  );
};

export default Home;
