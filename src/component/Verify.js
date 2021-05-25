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
// import OTPInputView from '@twotalltotems/react-native-otp-input'
import OtpInputs from 'react-native-otp-inputs';
const Verify = () => {

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

        <View style={{ marginHorizontal: 25, marginTop: 120 }}>
          <Text style={{ fontWeight: 'bold', marginTop: 10, fontSize: 18 }}>Verify Email</Text>
          <Text style={{ marginTop: 0, fontSize: 15 }}>Please check your email</Text>

        </View>
        <OtpInputs
          // handleChange={(code) => console.log(code)}
          numberOfInputs={4}
          inputStyles={{ backgroundColor: '#01C19D',color: '#fff',borderRadius: 5,marginTop: 50, textAlign: 'center', alignItems: 'center', width: 50, height: 50, borderColor: 'grey', borderWidth: 2, marginHorizontal: 25 }}
        // focusStyles={{backgroundColor: '#01C19D', width: 40, height: 40,  }}
        // inputContainerStyles={{backgroundColor: 'green'}}
        />
        <View style={{marginHorizontal: 25, marginTop: 25, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text style={{ marginTop: 0, fontSize: 15 }}>Check Email</Text>
        <Text style={{ marginTop: 0, fontSize: 15 , color: '#01C19D'}}>Resend email</Text>

        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', alignSelf: 'center', marginHorizontal: 25, marginTop: 150 }}>

          <TouchableOpacity
            // onPress={() => { navigation.navigate('Room') }}
            style={{
              width: "85%",
              backgroundColor: "#390CC6",
              borderRadius: 5,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              marginTop: 20,
              marginBottom: 10,
              alignSelf: 'center'
            }}>
            <Text style={styles.loginText}>Submit</Text>
          </TouchableOpacity>

        </View>


      </ScrollView>
    </View >
  );
}



export default Verify

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
  borderStyleBase: {
    width: 30,
    height: 45
  },

  borderStyleHighLighted: {
    borderColor: "#03DAC6",
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderWidth: 0,
    borderBottomWidth: 1,
  },

  underlineStyleHighLighted: {
    borderColor: "#03DAC6",
  },
});