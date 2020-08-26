import React from 'react';
import { func } from 'prop-types';
import { Button, View, TextInput, Text, TouchableOpacity, Dimensions } from 'react-native';
import { useStatus, LOADING } from '@rootstrap/redux-tools';

import { login } from 'actions/userActions';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import Input from 'components/common/Input';
import useForm from 'hooks/useForm';
import useValidation from 'hooks/useValidation';
import loginValidations from 'validations/loginValidations';
import ErrorView from 'components/common/ErrorView';
import useTextInputProps from 'hooks/useTextInputProps';
import strings from 'locale';
import styles from './styles';

const { width, height } = Dimensions.get('window');

const FIELDS = {
  username: 'username',
  password: 'password',
};

const LoginForm = ({ onSubmit }) => {
  const { error, status } = useStatus(login);
  // const validator = useValidation(loginValidations);
  const { values, errors, handleValueChange, handleSubmit, handleBlur } = useForm(
    {
      onSubmit,
      // validator,
      validateOnBlur: true,
      validateOnChange: true,
    },
    [onSubmit],
  );

  const inputProps = useTextInputProps(handleValueChange, handleBlur, values);

  return (
    <View style={styles.container}>
    <Text style={[styles.text_footer,{marginTop:35 }]}>UserName</Text>
    <View style={styles.inputView} >
      <TextInput
        style={styles.inputText}
        placeholder="username"
        keyboardType="email-address"
        autoCapitalize="none"
        testID="email-input"
        {...inputProps(FIELDS.username)}
      />
     </View>

     <Text style={[styles.text_footer],
    {marginTop: 35}}>Password</Text>
    <View style={styles.inputView} >
      <TextInput
        style={styles.inputText}
        placeholder="password"
        testID="password-input"
        secureTextEntry
        {...inputProps(FIELDS.password)}
      />
                  </View>
      <ErrorView errors={{ ...errors, error }} />
      <TouchableOpacity>
          <Text style={styles.forgot}>Forgot Password?</Text>
        </TouchableOpacity>
        <Button
          testID="login-submit-button"  
          title={status === LOADING ? strings.COMMON.loading : strings.SIGN_IN.button}
          onPress={handleSubmit}
        />
      </View>
  );
};

LoginForm.propTypes = {
  onSubmit: func.isRequired,
};

export default LoginForm;
