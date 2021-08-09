import React, { useCallback } from 'react';

import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import { useMutation } from 'relay-hooks';
import {
  ConnectionHandler,
  RecordProxy,
  RecordSourceSelectorProxy,
  ROOT_ID,
} from 'relay-runtime';
import * as Yup from 'yup';

import Button from '../../components/Button';
import CreateTweetMutation from '../../data/relay/CreateTweetMutation';
import { Container, ButtonsContainer, Content, Input } from './styles';

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

const USER_ID = '610f088a7b32b73a98979e09';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Mandatory field'),
});

const initialValues = {
  tweetText: '',
};

const NewTweet = ({ navigation }: Props) => {
  const [commit] = useMutation(CreateTweetMutation);

  const handleCreateTweet = useCallback(
    async (text: string) => {
      const config = {
        variables: {
          author: USER_ID,
          description: text,
        },
        updater: (store: RecordSourceSelectorProxy) => {
          const payload = store.getRootField('createTweet');
          const newEdge = payload?.getLinkedRecord('tweetEdge');
          const tweetProxy = store.get(ROOT_ID);

          const conn = ConnectionHandler.getConnection(
            tweetProxy as RecordProxy,
            'Tweet_tweets',
          );

          ConnectionHandler.insertEdgeBefore(
            conn as RecordProxy,
            newEdge as RecordProxy,
          );
        },
      };

      await commit(config);
      navigation.goBack();
    },
    [commit, navigation],
  );

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={values => console.log(values)}>
      {({ handleChange, values }) => (
        <Container>
          <ButtonsContainer>
            <Button noBg onPress={() => navigation.goBack()}>
              Cancelar
            </Button>
            <Button onPress={handleCreateTweet.bind(null, values.tweetText)}>
              Tweet
            </Button>
          </ButtonsContainer>
          <Content>
            <Input
              multiline
              placeholder="O que está acontecendo?"
              value={values.tweetText}
              onChangeText={handleChange('tweetText')}
            />
          </Content>
        </Container>
      )}
    </Formik>
  );
};

export default NewTweet;
