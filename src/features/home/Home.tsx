import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Image } from 'react-native';
import  talk  from './service/TalkAPI/TalkAPI'
import {TalksProps} from './service/TalkAPI/TalksProps'
import { ItemSeparatorView } from "./item-separator";
import { SearchBar } from "./search-bar";
import styles from './Home.styles';
  
const Home = ({navigation}:any) => {

  const [value, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);

  useEffect(() => {
    navigation.setOptions({
      title: 'Palestras',
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

  const searchFilter = (text: string) => {
    if (text) {
      const searchText = masterDataSource.filter(
        (item:TalksProps) => { 
         return item.title
                  .toUpperCase()
                  .indexOf(text.toUpperCase()) > -1;}
      );
      setFilteredDataSource(searchText);
      setSearch(text);
    } else {
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const Talks = ({item:talk})  => {
    return (
      <View key={talk.id} style={styles.talks}>
        <View style={styles.talkImageContainer}>
          <Image style={styles.talkImage}
            source={{ uri: talk.image }}/>
        </View>
        <View style={styles.talkInformationsContainer}>
          <Text style={styles.talkTitle}>{talk.title}</Text>
          <Text style={styles.talkItem} onPress={() => navigation.navigate("speaker-profile")}>
              {`${talk.id}.${talk.description}`}
          </Text>
        </View>
      </View>
     
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.searchBar}>
          <SearchBar onChangeText={(text: any) => searchFilter(text)} value={value}></SearchBar>
        </View>
        <FlatList 
              data={filteredDataSource}
              renderItem={Talks}
              onEndReachedThreshold={0.1}
              keyExtractor={(talk, index) => index.toString()}
              ItemSeparatorComponent={ItemSeparatorView}
              />
 
    </SafeAreaView>
  );
};

export default Home;