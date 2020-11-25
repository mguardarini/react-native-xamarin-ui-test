import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  TextInput,
  Image,
  ScrollView
} from 'react-native';
import tdc_logo from '../../../assets/tdc-logo.png';
import  talk  from './talk-service/TalksService'
import {TalksProps} from './talk-service/TalksProps'
import { ItemSeparatorView } from "./item-separator/ItemSeparatorView";
import styles from './Home.styles';
  
const Home = ({navigation}:any) => {

  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

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
    talk.getAllTalks().then((response: TalksProps) => {
      setFilteredDataSource(response);
      setMasterDataSource(response);
    });
  
  }, []);

  const searchFilterFunction = (text: string) => {
    if (text) {
      const newData = masterDataSource.filter(
        function (item:TalksProps) {
          const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    const description =  item.id + '.' + item.description
    return (
      <View key={item.id} style={styles.talkCards}>
        <View style={{marginLeft:10}}>
          <Image style={styles.tinyLogo}
            source={{ uri: item.image }}/>
        </View>
        <View style={{marginRight:120}}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <Text style={styles.itemStyle} onPress={() => goToSpeakerProfile()}>
              {description}
          </Text>
        </View>
      </View>
     
    );
  };

  const goToSpeakerProfile = () => navigation.navigate("speaker-profile");

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.containerImage}> 
          <Image
                style={styles.logo_image}
                source={tdc_logo}
          />
        </View>
        <View style={styles.containerTextInput}>
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text: any) => searchFilterFunction(text)}
            value={search}
            underlineColorAndroid="transparent"
            placeholder="Buscar"
          />
        </View>
        <FlatList 
              data={filteredDataSource}
              renderItem={ItemView}
              onEndReachedThreshold={0.1}
              keyExtractor={(item, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              />
 
    </SafeAreaView>
  );
};
export default Home;