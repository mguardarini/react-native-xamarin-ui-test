import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  Linking,
  SafeAreaView,
  Share
} from 'react-native';
import styles from './SpeakerProfile.styles';
import {Button} from '../../components/button';

import profileImage from '../../../assets/profile2.jpeg';

const SpeakerProfile = ({navigation}:any) => {
 
  useEffect(() => {
    navigation.setOptions({ 
      title: 'Perfil Palestrante.',
      headerStyle: {
        backgroundColor: '#0798D5',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
  }); 
  },[]);
  const onShare = async () => {
    try {
      await Share.share({
        message:
          'Link da Palestra: @Link',
      });
    } catch (error) {
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.blueContainer}>
          <View style={styles.blueContainer_margin}></View> 
      </View>
      <View style={styles.profile_borderImage}>
            <Image
                source={profileImage}
                style = {styles.profile_image}>
            </Image>   
       </View>
       <View style={styles.textContainer}>
            <Text style={styles.textContainer_speaker}>
                Mauro Guardarini
            </Text>  
            <Text style={styles.textContainer_type}>
                Trilha: Microsoft.
            </Text>
            <Text style={styles.textContainer_theme}>
                Tema: React Native & Xamarin UI Test no App Center.
            </Text>  
            <Text style={styles.textContainer_description}>
                Nesta palestra vamos contar como executar testes de aceitação 
                para React Native utilizando Xamarin UI Test no App Center.
            </Text>  
            <Text style={styles.textContainer_socialNetworkTitle}>
                Redes Sociais:
            </Text>
            <Text style={styles.textContainer_socialNetworkDescription} onPress={() => Linking.openURL("https://twitter.com/MGuardarini")}>
                Twitter: @mguardarini
            </Text>
            <Text style={styles.textContainer_socialNetworkDescription} onPress={() => Linking.openURL("https://github.com/mguardarini")}>
                Github: https://github.com/mguardarini
            </Text>
            <View style={styles.buttonShare}>
              <Button
                testID="button-palestra"
                onPress={onShare} 
                title="Compartilhar" 
              />  
            </View>        
       </View>
    </SafeAreaView>
  );
};

export default SpeakerProfile;

