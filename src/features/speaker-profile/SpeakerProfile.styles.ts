import {
  StyleSheet,
  Dimensions,
  ImageStyle,
  TextStyle,
  ViewStyle
} from 'react-native';

const defaultStyleText = { 
  fontWeight:'bold',
  textAlign:'center',
} as TextStyle

const defaultStyleImage = {
  borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
  backgroundColor:'#ffffff',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  left: 0,
  top: 0  
} as ImageStyle;

const defaultMargin = { 
  marginLeft: '10%',
  marginRight: '10%'
} as ViewStyle

export default StyleSheet.create({
    blueContainer: {
      backgroundColor:'#004F8A',
    },
    blueContainer_margin:{
      marginTop:'35%',
    },
    textContainer: {
      marginTop:'15%'
    },
    textContainer_theme: {  
      marginTop:'2%',
      marginLeft:'20%',
      marginRight:'20%',
      fontSize:16,
      ...defaultStyleText 
    },
    textContainer_type: {
      fontSize:16,
      marginTop:'2%',
      ...defaultStyleText 
    },
    textContainer_speaker: {
      ...defaultStyleText,
      fontSize:28,
    },
    textContainer_description:{
      fontSize: 14,
      marginTop: '5%',      
      ...defaultMargin,   
    },
    textContainer_socialNetworkTitle: {
      fontSize: 14,
      fontWeight:'bold',
      marginTop: '5%',
      ...defaultMargin,
    },
    textContainer_socialNetworkDescription:{
      marginTop: '2%',
      fontSize: 14,
      ...defaultMargin
    },
    buttonShare: { 
      ...defaultMargin,
      marginTop:'10%'
    },
    profile_image: {
      width: Dimensions.get('window').width * 0.37,
      height: Dimensions.get('window').width * 0.37,
      marginLeft:'2%',
      marginTop:'2%',
      ...defaultStyleImage
   
    },
    profile_borderImage:  {
      width: Dimensions.get('window').width * 0.25,
      height: Dimensions.get('window').width * 0.39,
      marginTop:30,
      marginLeft:'30%',
      ...defaultStyleImage
    }
});