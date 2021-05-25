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

const Room = () => {

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
          <View style={{ marginHorizontal: 25, marginTop: 130, alignItems: 'center', flexDirection: 'row' }}>

            <Image source={images.profileUser} style={{ width: 60, height: 60, marginRight: 10, borderRadius: 60 }} />

            <View>
              <Text style={{ fontWeight: '700', fontSize: 20, color: '#fff' }}>User Name</Text>
              <Text style={{ fontWeight: '500', fontSize: 12, color: '#fff' }}>User Address</Text>

            </View>
          </View>
        </ImageBackground>
        <View style={{ marginHorizontal: 22, marginTop: 30, marginBottom: -10, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Gallery</Text>
          <Text>See all</Text>
        </View>
        <View style={{ borderRadius: 10, marginHorizontal: 20, marginTop: 20, flexDirection: 'row' }}>

          <Image source={images.house1} style={{ width: 238, borderRadius: 5, height: 210, marginRight: 10 }} />
          <View>
            <Image source={images.house1} style={{ width: 120, borderRadius: 5, height: 100, marginRight: 20 }} />
            <Image source={images.house1} style={{ width: 120, borderRadius: 5, height: 100, marginRight: 20, marginTop: 10 }} />
          </View>

        </View>

        <View style={{ marginHorizontal: 25, alignItems: 'center', marginTop: 40 }}>

          <TouchableOpacity
            onPress={() => { navigation.navigate('Feature') }}
            style={{
              width: "80%",
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

export default Room