import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView, ToastAndroid, StatusBar, View, Image, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';

import images from './../constant/images';

export default function SignUp() {

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
          {/* <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image resizeMode='contain' style={{ height: 20, width: 20, marginRight: 10, tintColor: '#fff' }} source={images.arrow} />
          </TouchableOpacity> */}
        </View>
        <Text style={{ color: '#000', fontSize: 25, marginTop: 40, fontWeight: '700', marginLeft: 25 }}>Sign Up</Text>
        <Text style={{ color: '#000', fontSize: 12, fontWeight: '700', marginLeft: 25 }}>Lorem ipsum, or lipsum as it</Text>

        {/* <View style={{ position: 'absolute', width: '100%', bottom: 100 }}> */}
        <View style={{ marginHorizontal: 25, marginTop: 100 }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#d4d4d4',
              borderRadius: 5,
              height: 50
            }}>
            <FontAwesome
              name='user'
              type='font-awesome'
              color='#000'
              style={{ marginLeft: 10 }}
              size={20}
              containerStyle={{ width: 10, }} />
            <TextInput
              style={{
                fontSize: 15,
                // width: '80%',
                color: "#000",

                marginLeft: 15,
              }}
              placeholder="Full Name"
              placeholderTextColor={'#000'}
              keyboardType={'phone-pad'}
              value={phoneNumber}
              onChangeText={(value) => {
                setPhoneNumber(value);
              }}
            />

          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#d4d4d4',
              borderRadius: 5,
              height: 50,
               marginTop: 10
            }}>
            <MaterialIcons
              name='email'
              type='font-awesome'
              color='#000'
              style={{ marginLeft: 10 }}
              size={20}
              containerStyle={{ width: 10, }} />
            <TextInput
              style={{
                fontSize: 15,
                // width: '80%',
                color: "#000",

                marginLeft: 15,
              }}
              placeholder="Email"
              placeholderTextColor={'#000'}
              keyboardType={'phone-pad'}
              value={phoneNumber}
              onChangeText={(value) => {
                setPhoneNumber(value);
              }}
            />

          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: '#d4d4d4',
              borderRadius: 5,
              height: 50,
              marginTop: 10
            }}>
            <Entypo
              name='lock'
              type='font-awesome'
              color='#000'
              style={{ marginLeft: 10 }}
              size={20}
              containerStyle={{ width: 10, }} />
            <TextInput
              style={{
                fontSize: 15,
                // width: '80%',
                color: "#000",

                marginLeft: 15,
              }}
              placeholder="Password"
              placeholderTextColor={'#000'}
              keyboardType={'phone-pad'}
              value={phoneNumber}
              onChangeText={(value) => {
                setPhoneNumber(value);
              }}
            />

          </View>
          <TouchableOpacity
            style={{
              // elevation: 8,
              // shadowColor: 'rgba(45, 45, 45,)',
              // shadowOpacity: 0.1,
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
            <Text style={styles.loginText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
          <Text style={{color: '#000', alignSelf: 'center'}}>Already have an account? Login</Text>
        </TouchableOpacity>
        {/* </View> */}
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
