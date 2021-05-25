import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, StatusBar, TextInput, Image, Picker, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome, Entypo, Feather } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import images from './../constant/images'
import { useNavigation } from '@react-navigation/native';

const Detail = () => {
  
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
        <ImageBackground source={images.house1} resizeMode={'cover'} style={{ height: 300, }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 40, marginHorizontal: 25, }}>
            <Entypo
              name='share'
              type='font-awesome'
              color='#fff'
              style={styles.arrow}
              size={20}
              containerStyle={{ width: 10 }} />
            <Entypo
              name='google-drive'
              type='font-awesome'
              color='#fff'
              style={styles.arrow}
              size={20}
              containerStyle={{ width: 10 }} />
          </View>
          <View style={{ marginHorizontal: 25, marginTop: 40 }}>

            <TouchableOpacity
              // onPress={() => { navigation.navigate('Home') }}
              style={{
                width: "40%",
                backgroundColor: "#390CC6",
                borderRadius: 5,
                height: 40,
                alignItems: "center",
                justifyContent: "center",
                marginTop: 20,
                marginBottom: 10,
              }}>
              <Text style={styles.loginText}>Text</Text>
            </TouchableOpacity>
            <Text style={{ fontWeight: '700', fontSize: 20, color: '#fff' }}>Lorem ipsum, or lipsum as it</Text>

          </View>
        </ImageBackground>
        <View style={{ marginHorizontal: 25 }}>
          <Text style={{ fontWeight: '700', fontSize: 20, color: '#000', marginTop: 20 }}>Base For</Text>
          <View style={{ flexDirection: 'row',borderRadius: 15,elevation: 6,marginTop: 15, justifyContent: 'space-between', backgroundColor: '#D9EDEE', height: 40, alignItems: 'center' }}>
            <Text style={{marginLeft: 10, fontSize: 15, color: '#000', marginTop: 0 }}>Base For</Text>
            <Entypo
              name='share'
              type='font-awesome'
              color='#fff'
              style={{marginRight: 10}}
              size={20}
              containerStyle={{ width: 10, }} />
          </View>
          <View style={{ flexDirection: 'row',borderRadius: 15,marginTop: 15, elevation: 6, justifyContent: 'space-between', backgroundColor: '#fff', height: 40, alignItems: 'center' }}>
            <Text style={{marginLeft: 10, fontSize: 15, color: '#000', marginTop: 0 }}>Base For</Text>
            <Entypo
              name='share'
              type='font-awesome'
              color='grey'
              style={{marginRight: 10}}
              size={20}
              containerStyle={{ width: 10, }} />
          </View>
          <View style={{ flexDirection: 'row',borderRadius: 15,marginTop: 15, elevation: 6, justifyContent: 'space-between', backgroundColor: '#fff', height: 40, alignItems: 'center' }}>
            <Text style={{marginLeft: 10, fontSize: 15, color: '#000', marginTop: 0 }}>Base For</Text>
            <Entypo
              name='share'
              type='font-awesome'
              color='grey'
              style={{marginRight: 10}}
              size={20}
              containerStyle={{ width: 10, }} />
          </View>
          <View style={{ flexDirection: 'row',borderRadius: 15,marginTop: 15, elevation: 6, justifyContent: 'space-between', backgroundColor: '#fff', height: 40, alignItems: 'center' }}>
            <Text style={{marginLeft: 10, fontSize: 15, color: '#000', marginTop: 0 }}>Base For</Text>
            <Entypo
              name='share'
              type='font-awesome'
              color='grey'
              style={{marginRight: 10}}
              size={20}
              containerStyle={{ width: 10, }} />
          </View>
        </View>

        <Text style={{ marginLeft: 25, marginTop: 20, fontSize: 15, fontWeight: '700' }}>Images</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
          <TouchableOpacity onPress={() => { }} style={{ marginTop: '5%', marginRight: 10 }}>
            <View style={{ borderRadius: 15, backgroundColor: '#390CC6', elevation: 6, width: 150, height: 110, padding: 25 }}>
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
            onPress={() => { navigation.navigate('Dashboard') }}
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

export default Detail