import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, StatusBar, FlatList, TextInput, Image, Picker, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome, Entypo, Feather } from '@expo/vector-icons';
const { width, height } = Dimensions.get('window');

import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Review from './Review'
import images from './../constant/images'

const Categories = () => {

  const dealsData = [
    {
      title: 'Home Name',
      oldPrice: 'Home Detail',

      newPrice: 'Text',
      image: images.house1
    },
    {
      title: 'Home Name',
      oldPrice: 'Home Detail',

      newPrice: 'Text',
      image: images.house2
    },
    {
      title: 'Home Name',
      oldPrice: 'Home Detail',

      newPrice: 'Text',
      image: images.house3
    },
    {
      title: 'Home Name',
      oldPrice: 'Home Detail',
      newPrice: 'Text',
      image: images.house1
    },
    {
      title: 'Home Name',
      oldPrice: 'Home Detail',

      newPrice: 'Text',
      image: images.house2
    },
  ];
  const navigation = useNavigation()
  const [search, setSearch] = useState('')
  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#000"
      />
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 40, marginHorizontal: 25, }}>
          <Entypo
            name='share'
            type='font-awesome'
            color='#390CC6'
            style={styles.arrow}
            size={20}
            containerStyle={{ width: 10 }} />
          <Entypo
            name='google-drive'
            type='font-awesome'
            color='#390CC6'
            style={styles.arrow}
            size={20}
            containerStyle={{ width: 10 }} />
        </View>

        <View style={{ flexDirection: 'row', backgroundColor: '#fff', marginHorizontal: 25, borderRadius: 5, elevation: 6, height: 50, marginTop: 20, alignItems: 'center' }}>
          <Image
            source={images.search}
            resizeMode={'contain'}
            style={{ width: 15, height: 15, marginLeft: 10, tintColor: '#01C19D' }}
          />
          <TextInput
            style={{
              fontSize: 15,
              marginTop: 0,
              width: '80%',
              color: "white",
              marginLeft: 15,
            }}
            placeholder="Categories here"
            placeholderTextColor={'#000'}
            value={search}
            onChangeText={(value) => {
              setSearch(value);
            }}
          />

        </View>
        <View style={{ marginHorizontal: 22, marginTop: 30, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Categories</Text>
        </View>

  
        <FlatList
          numColumns={2}
          // horizontal={true}
          style={{ marginHorizontal: 10, }}
          showsHorizontalScrollIndicator={false}
          data={dealsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={{ padding: 5 }}>
                <View style={{ backgroundColor: '#fff', width: width / 2 - 30, borderRadius: 10, elevation: 6, marginHorizontal: 5, marginTop: 5, }}>
                  <View style={{ padding: 10 }}>
                    <ImageBackground resizeMode={'contain'} source={item.image} style={{width: 'auto',  height: 100, }} >
                    <Text style={{ fontSize: 18, color: '#fff', marginTop: 0,position: 'absolute', bottom: 5, left:5  }}>{item.oldPrice} </Text>

                    </ImageBackground>
                   
                  </View>
                </View>
              </View>

            );
          }}
        />
        <View style={{ marginHorizontal: 25, marginTop: 40 }}>

          <TouchableOpacity
            onPress={() => { navigation.navigate('HomeDetail') }}
            style={{
              width: "100%",
              backgroundColor: "#390CC6",
              borderRadius: 5,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 10,
              alignSelf: 'center'
            }}>
            <Text style={styles.loginText}>Dummay Text</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </View >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  loginText: {
    color: "white",
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 18
  },
});

export default Categories