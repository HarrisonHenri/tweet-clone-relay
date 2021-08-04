import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
} from 'react-native';

import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

import Button from '../../components/Button';
import Input from '../../components/Input';
import { Container, CreateAccount, CreateAccountText, Text } from './styles';

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

const SignIn = () => {
  return (
    <>
      <KeyboardAvoidingView
        style={styles.containerKeyboard}
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          style={styles.contentContainer}>
          <Container>
            <Text>Faça seu logon</Text>
            <Input name="email" icon="" placeholder="E-mail" />
            <Input name="password" icon="" placeholder="Senha" />
            <Button onPress={() => {}}>Entrar</Button>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <CreateAccount onPress={() => {}}>
        <CreateAccountText>Crie sua conta</CreateAccountText>
      </CreateAccount>
    </>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  containerKeyboard: { flex: 1 },
  contentContainer: { flex: 1 },
});
