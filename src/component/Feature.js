import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, StatusBar, TextInput, Image, Picker, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome, Entypo, Feather } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Review from './Review'
import images from '../constant/images'

const Feature = () => {

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
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 60, marginHorizontal: 25, }}>
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

        <View style={{ marginHorizontal: 25 }}>
          <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 18 }}>Feature</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity
              // onPress={() => { navigation.navigate('Room') }}
              style={{
                width: 150,
                backgroundColor: "#06C399",
                borderRadius: 5,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
                alignSelf: 'center'
              }}>
              <Text style={styles.loginText}>Text</Text>
            </TouchableOpacity>
            <Text style={{ color: 'grey', marginLeft: 15, fontSize: 18 }}>Feature</Text>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 20, justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', color: '#000', marginLeft: 15, fontSize: 18 }}>Feature</Text>
            <Text style={{ color: 'grey', marginLeft: 15, fontSize: 18 }}>Feature</Text>

          </View>
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
        <Text style={{ fontWeight: 'bold', marginLeft: 25, marginTop: 15, fontSize: 18 }}>Feature</Text>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: 25 }}>
          <TouchableOpacity
            // onPress={() => { navigation.navigate('Room') }}
            style={{
              width: 150,
              backgroundColor: "#06C399",
              borderRadius: 5,
              height: 40,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
              marginBottom: 10,
              alignSelf: 'center'
            }}>
            <Text style={styles.loginText}>Text</Text>
          </TouchableOpacity>
          <Text style={{ color: 'grey', marginLeft: 15, fontSize: 18 }}>Text</Text>
          <Text style={{ color: 'grey', marginLeft: 15, fontSize: 18 }}>Feature</Text>
        </View>

        <View style={{ backgroundColor: '#fff', marginHorizontal: 25, borderRadius: 5, elevation: 6, marginTop: 20, }}>
          <View style={{ flexDirection: 'row', marginTop: 20, marginHorizontal: 20, justifyContent: 'space-between' }}>
            <Text style={{ fontWeight: 'bold', color: '#000', fontSize: 18 }}>Feature</Text>
            <Text style={{ color: 'grey', marginLeft: 15, fontSize: 18 }}>Feature</Text>

          </View>
          <View style={{ flexDirection: 'row', marginBottom: 10, marginHorizontal: 25, marginTop: 20, justifyContent: 'space-between', alignItems: 'center' }}>
            <TouchableOpacity
              // onPress={() => { navigation.navigate('Room') }}
              style={{
                width: 100,
                backgroundColor: "#06C399",
                borderRadius: 5,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
                alignSelf: 'center'
              }}>
              <Text style={styles.loginText}>Text</Text>
            </TouchableOpacity>
            <Text style={{ color: 'grey', marginLeft: 15, fontSize: 18 }}>Or</Text>
            <TouchableOpacity
              // onPress={() => { navigation.navigate('Room') }}
              style={{
                width: 100,
                backgroundColor: "lightgrey",
                borderRadius: 5,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 10,
                marginBottom: 10,
                alignSelf: 'center'
              }}>
              <Text style={styles.loginText}>Text</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={{ color: 'grey',alignSelf: 'center', marginTop: 20, fontSize: 18 }}>Contact us</Text>

        <View style={{flexDirection: 'row',justifyContent: 'space-between', marginHorizontal: 25, marginTop: 40 }}>

          <TouchableOpacity
            // onPress={() => { navigation.navigate('Room') }}
            style={{
              width: "45%",
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
          <TouchableOpacity
            onPress={() => { navigation.navigate('Login') }}
            style={{
              width: "45%",
              backgroundColor: "lightgrey",
              borderRadius: 5,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 10,
              alignSelf: 'center'
            }}>
            <Text style={[styles.loginText, {color: '#390CC6'}]}>Dummay Text</Text>
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

export default Feature