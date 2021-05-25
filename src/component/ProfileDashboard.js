import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, StatusBar, TextInput, Image, Picker, TouchableHighlight, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Icon } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome, Entypo, Feather } from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import images from '../constant/images'
import { useNavigation } from '@react-navigation/native';

const ProfileDashboard = () => {
  
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
        <View style={{flexDirection: 'row',marginTop: 20, justifyContent: 'space-between', marginHorizontal: 60}}>
          <View style={{}}>
            <Entypo
              name='v-card'
              type='font-awesome'
              color='grey'
              style={styles.arrow}
              size={25}
              containerStyle={{ width: 10 }} />
            <Text style={{}}>Text</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Entypo
              name='v-card'
              type='font-awesome'
              color='grey'
              style={styles.arrow}
              size={25}
              containerStyle={{ width: 10 }} />
            <Text>Text</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Entypo
              name='v-card'
              type='font-awesome'
              color='grey'
              style={styles.arrow}
              size={25}
              containerStyle={{ width: 10 }} />
            <Text>Text</Text>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Entypo
              name='v-card'
              type='font-awesome'
              color='grey'
              style={styles.arrow}
              size={25}
              containerStyle={{ width: 10 }} />
            <Text>Text</Text>
          </View>
        </View>

        <View style={{borderRadius: 10,marginHorizontal: 20,marginTop: 20,}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 10}}>Description</Text>
          <Text style={{padding: 10}}>What is Lorem Ipsum Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industry's standard dummy text ever since the 1500s when an unknown printer </Text>
        </View>
        <View style={{borderRadius: 10,marginHorizontal: 20,marginTop: 20,}}>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 10}}>Images</Text>
          <ScrollView style={{marginLeft: 10, marginTop: 10}} showsHorizontalScrollIndicator={false} horizontal>
          <Image source={images.house1} style={{ width: 120, height: 100, marginRight: 20 }} />
          <Image source={images.house1} style={{ width: 120, height: 100, marginRight: 20 }} />
          <Image source={images.house1} style={{ width: 120, height: 100, marginRight: 20 }} />
          <Image source={images.house1} style={{ width: 120, height: 100, marginRight: 20 }} />

          </ScrollView>
        </View>

        <View style={{ marginHorizontal: 25,flexDirection: 'row',justifyContent: 'space-between', marginTop: 40 }}>

          <TouchableOpacity
            // onPress={() => { navigation.navigate('Home') }}
            style={{
              width: "45%",
              // backgroundColor: "#390CC6",
              borderRadius: 5,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 10,
              alignSelf: 'center'
            }}>
            <Text style={[styles.loginText, {color: '#000'}]}>Dummay Text</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => { navigation.navigate('Selection') }}
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

export default ProfileDashboard