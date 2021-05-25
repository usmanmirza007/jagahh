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
import images from './../constant/images'

const Profile = () => {

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
        <View style={{ marginHorizontal: 20, marginTop: 30, alignItems: 'center' }}>
          <Image source={require('./../image/profileUse.png')} style={{ width: 80, height: 80, borderRadius: 80 }} />
          <View style={{ alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Name</Text>
            <Text>User Address</Text>
          </View>
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 10, elevation: 6, marginHorizontal: 20, marginTop: 20, }}>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image source={require('./../image/house1.jpg')} style={{ width: 100, height: 100, marginRight: 20 }} />
            <View>
              <Text style={{ fontSize: 18 }}>User name</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Review />
                <Text style={{ fontSize: 18, marginLeft: 0, marginTop: -5 }}>Text</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
              <TouchableOpacity
                // onPress={() => { navigation.navigate('Detail') }}
                style={{
                  width: "50%",
                  marginLeft: 0,
                  backgroundColor: "#390CC6",
                  borderRadius: 5,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                }}>
                <Text style={styles.loginText}>Text</Text>
              </TouchableOpacity>
              <Text style={{fontWeight: 'bold'}}>Text</Text>
              </View>

            </View>
          </View>
        </View>
        <View style={{ backgroundColor: '#fff', borderRadius: 10, elevation: 6, marginHorizontal: 20, marginTop: 20, }}>
          <View style={{ flexDirection: 'row', padding: 10 }}>
            <Image source={require('./../image/house1.jpg')} style={{ width: 100, height: 100, marginRight: 20 }} />
            <View>
              <Text style={{ fontSize: 18 }}>User name</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Review />
                <Text style={{ fontSize: 18, marginLeft: 0, marginTop: -5 }}>Text</Text>
              </View>
              <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10}}>
              <TouchableOpacity
                // onPress={() => { navigation.navigate('Detail') }}
                style={{
                  width: "50%",
                  marginLeft: 0,
                  backgroundColor: "#390CC6",
                  borderRadius: 5,
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 5,
                }}>
                <Text style={styles.loginText}>Text</Text>
              </TouchableOpacity>
              <Text style={{fontWeight: 'bold'}}>Text</Text>
              </View>

            </View>
          </View>
        </View>
        <View style={{ marginHorizontal: 25, marginTop: 40 }}>

          <TouchableOpacity
            onPress={() => { navigation.navigate('Search') }}
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

export default Profile