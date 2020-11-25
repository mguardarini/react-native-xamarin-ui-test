import React, { ReactElement } from 'react'
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  GestureResponderEvent,
  View,
} from 'react-native'
import styles from './styles'

type Props = {
  title: string
  icone?: ReactElement
  onPress: (event: GestureResponderEvent) => void
  testID?: string
}

const Button = ({
  title,
  onPress,
  testID
}: Props): ReactElement => {
  return (
    <TouchableOpacity
      onPress={onPress}
      testID={`botao ${testID}`}
      style={StyleSheet.flatten([
        styles.button 
      ])}
    >
      <View style={styles.label_container}>
        <Text
          testID={`rotulo ${testID}`}
          style={StyleSheet.flatten([
            styles.label
          ])}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

Button.defaultProps = {
  cor: 'blue'
}

export default Button