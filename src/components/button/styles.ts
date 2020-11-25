import { StyleSheet } from 'react-native'
import {white,blue} from '../../styles/colors';

export default StyleSheet.create({
  button: {
    padding: 16,
    backgroundColor: blue,
    borderRadius: 30,
    textAlign: 'center',
    justifyContent: 'center',
  },
  label_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    color: white,
    fontSize: 16,
  },
})
