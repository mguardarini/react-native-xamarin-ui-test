import {
    StyleSheet
  } from 'react-native';

import {white,gray,gray74,gray290} from '../../styles/colors';

export default StyleSheet.create({
    mainContainer: {
      backgroundColor:white,
      height:'100%', 
      width:'100%'
    },
    container: { 
      marginTop:'15%'
    },
    logo_image: {
      width: '100%',
      height: 100
    },
    textInput: { 
      color:gray74,
      backgroundColor:white,
      paddingLeft:15,
      height: 50,
      borderColor: gray,
      borderWidth: 1, 
      borderRadius:10 
    },
    label: {
      color:gray290,
      fontSize:16, 
      fontWeight:'bold'
    },
    label_container: {
      marginLeft:'55%', 
      marginTop:'5%', 
    },
    form_container: {
      marginLeft:'10%',
      marginRight:'10%',
      marginTop:'5%'
    },
});