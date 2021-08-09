import React, { useMemo } from 'react';
import { FlatList } from 'react-native';

import { formatDistance } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { useFragment } from 'relay-hooks';

import { TweetsFragment_Tweet$key } from '../../data/relay/__generated__/TweetsFragment_Tweet.graphql';
import { TweetsQueryResponse } from '../../data/relay/__generated__/TweetsQuery.graphql';
import TweetsFragment from '../../data/relay/TweetsFragment';
import {
  Content,
  Header,
  LikesButton,
  LikesIcon,
  SubText,
  Text,
  TweetContainer,
} from './styles';

const Tweet = ({ node }: { node: TweetsFragment_Tweet$key }) => {
  const tweet = useFragment<TweetsFragment_Tweet$key>(TweetsFragment, node);

  const formattedDate = useMemo(
    () =>
      `à ${formatDistance(new Date(tweet?.createdAt as Date), new Date(), {
        locale: ptBR,
      })}`,
    [tweet.createdAt],
  );

  return (
    <TweetContainer>
      <Header>
        <Text>{tweet.author?.name}</Text>
        <SubText>{formattedDate}</SubText>
      </Header>
      {tweet.description?.length > 0 && (
        <Content>
          <Text>{tweet.description}</Text>
        </Content>
      )}
      <LikesButton onPress={() => {}}>
        <LikesIcon />
        <SubText>{tweet.likes}</SubText>
      </LikesButton>
    </TweetContainer>
  );
};

interface Props {
  data: TweetsQueryResponse;
}

const TweetsList: React.FC<Props> = ({ data }) => {
  return (
    <FlatList
      data={data?.tweets?.edges}
      renderItem={({ item }) => <Tweet node={item.node} />}
      keyExtractor={(_, index) => index.toString()}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default TweetsList;
