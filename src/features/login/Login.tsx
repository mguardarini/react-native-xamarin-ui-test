import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Image,
  Alert
} from 'react-native';
import {Button} from '../../components/button';
import tdc_logo from '../../../assets/tdc-logo.png';
import styles from './Login.styles';
import codePush from 'react-native-code-push';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

type Props = {
  navigation: any
}

const Login = ({navigation}:Props) => {
    useEffect(() => {
      navigation.setOptions({
        title: 'Bem vindo.',
        headerStyle: {
          backgroundColor: '#0798D5',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        },
     });
    codePush.sync({
        updateDialog: {
          appendReleaseDescription:true
        },
        installMode: codePush.InstallMode.IMMEDIATE
      });
    });
    const [name, onChangeName] = useState('Nome');
    const [password, onChangePassword] = useState('Senha');

    return (
      <KeyboardAwareScrollView style={styles.mainContainer}>
          <View style={styles.container}>
            <Image
                  style={styles.logo_image}
                  source={tdc_logo}
                />
          </View>
          <View style={styles.container}>    
              <View style={styles.form_container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={name => onChangeName(name)}
                    placeholder="Nome"
                  />
              </View>
              <View style={styles.form_container}>
                <TextInput
                    style={styles.textInput}
                    onChangeText={password => onChangePassword(password)}
                    secureTextEntry
                    placeholder="Senha"
                    />
              </View>
              <View style={styles.label_container}> 
                <Text style={styles.label}>Esqueceu a senha?</Text>   
              </View>
             <View style={styles.form_container}>
                <Button
                    testID="button-palestra"
                    title="Entrar"
                    onPress={() => navigation.navigate('talks')}
                  />  
             </View>
          </View>
      </KeyboardAwareScrollView>
    );
}

export default Login;