import React from 'react';
import {
  TextInput,
} from 'react-native';

import styles from './SearchBar.styles';


const SearchBar = ({onChangeText,value}) => {

    return (
        <TextInput
                style={styles.textInputStyle}
                onChangeText={(text: any) => onChangeText(text)}
                value={value}
                underlineColorAndroid="transparent"
                placeholder="Buscar por palestra"
            />
        )
    
}

export default SearchBar;