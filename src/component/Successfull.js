import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, ToastAndroid, StatusBar, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import images from './../constant/images';

export default function Successfull() {

  const navigation = useNavigation()

  const [loading, setLoading] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState('');

  function validateNumber(phoneNumber) {
    const regex = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/
    return regex.test(phoneNumber)
  }

  return (
    <View style={styles.container}>
      <StatusBar
        translucent
        barStyle="light-content"
        backgroundColor="#000"
      />
      <ScrollView>
        {/* <ImageBackground source={image} style={styles.image}> */}
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 40, marginHorizontal: 25, }}>
          <Entypo
            name='share'
            type='font-awesome'
            color='#000'
            style={styles.arrow}
            size={20}
            containerStyle={{ width: 10 }} />
          <Entypo
            name='google-drive'
            type='font-awesome'
            color='#000'
            style={styles.arrow}
            size={20}
            containerStyle={{ width: 10 }} />
        </View>


        <View style={{ backgroundColor: '#390CC6', height: 80, alignItems: 'center', justifyContent: 'center', alignSelf: 'center', marginTop: 100, width: 80, borderRadius: 80 }}>
          <Image source={images.check} resizeMode={'contain'} style={{ tintColor: '#fff', width: 50, height: 50 }} />
        </View>
        <View style={{ alignItems: 'center' }}>

          <Text style={{ color: '#000', fontSize: 20, marginTop: 40, fontWeight: '700', marginLeft: 25 }}>Account Created</Text>
          <Text style={{ color: '#000', fontSize: 12, fontWeight: '700', marginLeft: 25 }}>Lorem ipsum, or lipsum as it</Text>
        </View>

        <View style={{ marginHorizontal: 25, marginTop: 80 }}>

          <TouchableOpacity
          onPress={() => {navigation.navigate('Home')}}
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
            <Text style={styles.loginText}>Successfull</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
      {/* </ImageBackground> */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginText: {
    color: "white",
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 18
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    width: "100%",
  },
});
