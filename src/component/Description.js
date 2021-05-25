import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, StatusBar, FlatList, TextInput, Image, Picker, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome, Entypo, Feather } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Review from './Review'
import images from './../constant/images'

const Description = () => {
  const dealsData = [
    {
      title: 'Home Name',
      oldPrice: 'Detail',
      newPrice: 'Text',
      image: images.house1
    },
    {
      title: 'Home Name',
      oldPrice: 'Detail',
      newPrice: 'Text',
      image: images.house2
    },
    {
      title: 'Home Name',
      oldPrice: 'Detail',
      newPrice: 'Text',
      image: images.house3
    },
    {
      title: 'Home Name',
      oldPrice: 'Detail',
      newPrice: 'Text',
      image: images.house1
    },
    {
      title: 'Home Name',
      oldPrice: 'Detail',
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
            placeholder="Description here"
            placeholderTextColor={'#000'}
            value={search}
            onChangeText={(value) => {
              setSearch(value);
            }}
          />

        </View>
        <View style={{marginHorizontal: 20, marginVertical: 10}}>
        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Find You Services</Text>
        <Text style={{ fontSize: 12, color: 'green' }}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's  type specimen book it has?</Text>
        
        </View>
        <View style={{ marginHorizontal: 22, marginTop: 10, marginBottom: -10, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>See the work</Text>
        </View>

        <FlatList
          // numColumns={2}
          horizontal={true}
          style={{ marginHorizontal: 10, }}
          showsHorizontalScrollIndicator={false}
          data={dealsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => {
            return (
              <View key={index} style={{ padding: 5 }}>
                <View style={{ backgroundColor: '#fff', width: 180, borderRadius: 10, elevation: 6, marginHorizontal: 5, marginTop: 20, }}>
                  <View style={{ padding: 10 }}>
                    <Image source={item.image} style={{ width: 160, height: 100, marginRight: 20 }} />
                    <View>
                      <Text style={{ fontSize: 18, color: 'grey', marginTop: 0 }}>{item.oldPrice} </Text>
                      <View style={{ flexDirection: 'row', marginBottom: 10, justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: '#000', marginBottom: 0 }}>{item.title}</Text>
                        <Text style={{ fontWeight: 'bold' }}>{item.newPrice}</Text>
                      </View>
                      <Review />
                    </View>
                  </View>
                </View>
              </View>

            );
          }}
        />
        <View style={{ marginHorizontal: 22, marginTop: 30, marginBottom: -10, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Services</Text>
        </View>
        <View style={{backgroundColor: '#fff',borderRadius: 10, elevation: 6,marginHorizontal: 20,marginTop: 20,}}>
          <View style={{flexDirection: 'row', padding: 10}}>
            <Image source={require('./../image/profileUse.png')} style={{width: 50, height: 50, marginRight: 20, borderRadius: 50}} />
            <View>
              <Text style={{fontSize: 18}}>User name</Text>
              <View style={{flexDirection: 'row'}}>
              <Text style={{marginRight: 10}}>User Address</Text>
              <Review />
              </View>

            </View>
          </View>
          <Text style={{padding: 10}}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer </Text>
        </View>
        <View style={{ marginHorizontal: 25, marginTop: 40 }}>

          <TouchableOpacity
            onPress={() => { navigation.navigate('ProfileDashboard') }}
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

export default Description