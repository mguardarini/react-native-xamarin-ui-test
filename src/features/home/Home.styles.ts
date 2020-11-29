import {
    StyleSheet
  } from 'react-native';

import { white } from '../../styles/colors';

export default StyleSheet.create({
  safeArea: {
    backgroundColor: white,
    flex:1,
  },

  talkImage: {
    width: 100,
    height: 90,
  },
  searchBar:{
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
  talkItem: {
    padding: 10,
  },
  talks:{
    flex: 1,
    flexDirection: 'row',
    marginTop:10
  },
  talkTitle:{fontSize:20, fontWeight:"bold", marginLeft:10},
  talkImageContainer: {
    marginLeft:10
  },
  talkInformationsContainer: {marginRight:120}
});