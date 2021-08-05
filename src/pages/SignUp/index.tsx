import React, { useCallback } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';

import { ParamListBase } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Button from '../../components/Button';
import Input from '../../components/Input';
import InputLabelError from '../../components/InputLabelError';
import { Container, Link, LinkText, Text } from './styles';

type Props = {
  navigation: StackNavigationProp<ParamListBase>;
};

const validationSchema = Yup.object().shape({
  name: Yup.string().email().required('Mandatory field'),
  email: Yup.string().email().required('Mandatory field'),
  password: Yup.string()
    .required('Mandatory field')
    .min(6, 'The password must have 6 characters at least'),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const SignUp: React.FC<Props> = ({ navigation }) => {
  const handleSignInClick = useCallback(() => {
    navigation.navigate('SignIn');
  }, [navigation]);

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
            <Text>Sign up</Text>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={values => console.log(values)}>
              {({ handleChange, handleSubmit, values, errors }) => (
                <View>
                  <Input
                    placeholder="Name"
                    value={values.email}
                    onChangeText={handleChange('name')}
                  />
                  {errors.name && (
                    <InputLabelError>{errors.name}</InputLabelError>
                  )}
                  <Input
                    placeholder="E-mail"
                    value={values.email}
                    onChangeText={handleChange('email')}
                  />
                  {errors.email && (
                    <InputLabelError>{errors.email}</InputLabelError>
                  )}
                  <Input
                    placeholder="Password"
                    value={values.password}
                    secureTextEntry={true}
                    onChangeText={handleChange('password')}
                  />
                  {errors.password && (
                    <InputLabelError>{errors.password}</InputLabelError>
                  )}
                  <Button onPress={() => handleSubmit()}>Submit</Button>
                </View>
              )}
            </Formik>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <Link onPress={handleSignInClick}>
        <LinkText>Go back to sign in area</LinkText>
      </Link>
    </>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  containerKeyboard: { flex: 1 },
  contentContainer: { flex: 1 },
});
