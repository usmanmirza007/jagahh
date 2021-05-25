import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, VirtualizedList, } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import images from './../constant/images'
export default class WelcomeUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleName}>Welcome</Text>
          <Text style={styles.lorem}>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, pesetter</Text>
        </View>
        <View style={{ marginHorizontal: 25, marginTop: 120 }}>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#390CC6', height: 50, borderRadius: 10, }}>
            <Text style={{ color: '#fff' }}>Login</Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginHorizontal: 25, marginTop: 20, flexDirection: 'row', justifyContent: 'space-between' }}>
          <View style={{ flexDirection: 'row', backgroundColor: '#d4d4d4', alignItems: 'center', paddingHorizontal: 30, borderRadius: 10 }}>
            <AntDesign
              name='google'
              type='font-awesome'
              color='#390CC6'
              style={styles.arrow}
              size={26}
              containerStyle={{ width: 10 }} />
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10, }}>
              <Text style={{ color: '#000', marginLeft: 10 }}>Google</Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', backgroundColor: '#3F5597', alignItems: 'center', paddingHorizontal: 30, borderRadius: 10 }}>
            <EvilIcons
              name='sc-facebook'
              type='font-awesome'
              color='#fff'
              style={styles.arrow}
              size={30}
              containerStyle={{ width: 10 }} />
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 50, borderRadius: 10, }}>
              <Text style={{ color: '#fff' }}>Facebook</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    marginHorizontal: 25,
    marginTop: 100,
  },
  titleName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5f5d70'
  },
  lorem: {
    color: '#666666',
    fontSize: 15,
    marginTop: 10

  },

});