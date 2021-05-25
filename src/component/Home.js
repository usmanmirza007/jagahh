import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, StatusBar, TextInput, Image, Picker, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome, Entypo, Feather } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import images from './../constant/images'
const Home = () => {
  
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
            placeholder="Search here"
            placeholderTextColor={'#000'}
            value={search}
            onChangeText={(value) => {
              setSearch(value);
            }}
          />

        </View>
        <View style={{ marginHorizontal: 25, backgroundColor: '#fff', elevation: 6, marginTop: 20, borderRadius: 5 }}>
          <Text style={{ fontWeight: '700', fontSize: 15, marginLeft: 10, marginTop: 10 }}>Add Photo</Text>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Image
              source={images.house1}
              resizeMode={'contain'}
              style={{ flex: 0.24, borderRadius: 5, height: 70, marginLeft: 10, }}
            />
            <Image
              source={images.house2}
              resizeMode={'contain'}
              style={{ flex: 0.24, borderRadius: 5, height: 70, marginLeft: 10, }}
            />
            <Image
              source={images.house2}
              resizeMode={'contain'}
              style={{ flex: 0.24, borderRadius: 5, height: 70, marginLeft: 10, }}
            />
            <Image
              source={images.house2}
              resizeMode={'contain'}
              style={{ flex: 0.24, borderRadius: 5, height: 70, marginLeft: 10, }}
            />
          </View>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Image
              source={images.house2}
              resizeMode={'contain'}
              style={{ flex: 0.24, borderRadius: 5, height: 70, marginLeft: 10, }}
            />
            <Image
              source={images.house3}
              resizeMode={'contain'}
              style={{ flex: 0.24, borderRadius: 5, height: 70, marginLeft: 10, }}
            />
            <Image
              source={images.house3}
              resizeMode={'contain'}
              style={{ flex: 0.24, borderRadius: 5, height: 70, marginLeft: 10, }}
            />
            <Image
              source={images.house3}
              resizeMode={'contain'}
              style={{ flex: 0.24, borderRadius: 5, height: 70, marginLeft: 10, }}
            />
          </View>
        </View>
        <Text style={{ marginLeft: 25, marginTop: 20, fontSize: 15, fontWeight: '700' }}>Images</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
          <TouchableOpacity onPress={() => { }} style={{ marginTop: '5%', marginRight: 10 }}>
            <View style={{ borderRadius: 15, backgroundColor: '#149c83', elevation: 6, width: 150, height: 110, padding: 25 }}>
              <Image source={require('./../image/homeIcon15.png')} style={{ tintColor: '#fff', width: 40, height: 40, marginLeft: -10 }} />
              <Text style={{ color: '#fff', marginTop: -5, fontWeight: 'bold' }}>Data</Text>
              <Text style={{ color: '#fff', marginTop: 5, fontWeight: '500' }}>Lorem ipsum,</Text>

            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => { }} style={{ marginTop: '5%', marginLeft: 10 }}>
            <View style={{ borderRadius: 15, backgroundColor: '#fff', elevation: 6, width: 150, height: 110, padding: 25 }}>
              <Image source={require('./../image/homeIcon9.png')} style={{ width: 40, height: 40, marginLeft: -10 }} />
              <Text style={{ color: '#149c83', marginTop: -5, fontWeight: 'bold' }}>Cable TV</Text>
              <Text style={{ color: '#149c83', marginTop: 5, fontWeight: '500' }}>Lorem ipsum,</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 25, marginTop: 40 }}>

          <TouchableOpacity
            onPress={() => { navigation.navigate('Detail') }}
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

export default Home