import {
    StyleSheet
  } from 'react-native';

import {white,gray,gray74} from '../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: white,
    flex:1,
  },
  itemStyle: {
    padding: 10,
  },
  textInputStyle: {
    color:gray74,
    backgroundColor:white,
    paddingLeft:15,
    height: 50,
    borderColor: gray,
    borderWidth: 1, 
    borderRadius:10 
  },
  tinyLogo: {
    width: 100,
    height: 90,
  },
  logo_image: {
    width: '100%',
    height: 100
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  talkCards:{
    flex: 1,
    flexDirection: 'row',
    marginTop:10
  },
  containerImage:{
    marginTop:40,
    marginRight:50, 
    marginLeft:50
  },
  containerTextInput:{
    marginTop:25,
    marginRight:10, 
    marginLeft:10
  },
  separator:{
    height: 0.5,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  margin10: {
    marginTop:10
  },
  cardTitle:{fontSize:20, fontWeight:"bold", marginLeft:10}

});