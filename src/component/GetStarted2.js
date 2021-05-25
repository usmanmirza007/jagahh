import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, KeyboardAvoidingView, Dimensions, TouchableOpacity, VirtualizedList, } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons, FontAwesome, AntDesign, EvilIcons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import images from './../constant/images'
export default class getStarted2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <View style={styles.container}>
         <View style={{ flexDirection: 'column',flex: 1, justifyContent: 'space-between' }}>
          <View style={{}}>
            <View style={{ alignItems: 'center', marginTop: 50 }}>
              <Image source={images.logo} style={{ width: 100, height: 100 }} />
            </View>
            <View style={styles.title}>
              <Text style={styles.titleName}>Always</Text>
              <Text style={styles.lorem}>Lorem ipsum, or lipsum as it is sometimes{'\n'}      known, is dummy text used in laying{'\n'}                       out print, pesetter</Text>

            </View>
          </View>
          <View style={{
            // position: 'absolute',
            // bottom: 0,
          }}>
            <View style={styles.buttom}>
              <TouchableOpacity>
                <Text style={styles.skip}></Text>
              </TouchableOpacity>
              <View style={styles.dotView}>
                <View style={styles.dot1}></View>
                <View style={styles.dot}></View>
                <View style={styles.dot1}></View>
              </View>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('GetStarted3')}
                style={styles.rightIcon}>
                <AntDesign
                  name='arrowright'
                  type='font-awesome'
                  color='#390CC6'
                  style={styles.arrow}
                  size={26}
                  containerStyle={{ width: 10 }} />
              </TouchableOpacity>
            </View>
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
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttom: {
    flexDirection: 'row',
    marginHorizontal: wp('5%'),
    // marginTop: wp('30%'),
    justifyContent: 'space-between'
  },
  dotView: {
    flexDirection: 'row',
    marginTop: wp('15%'),

  },
  dot: {
    backgroundColor: '#390CC6',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: wp('2%'),
  },
  dot1: {
    backgroundColor: '#f0f0f0',
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: wp('2%'),
  },
  rightIcon: {
    marginTop: hp('7%'),
    justifyContent: 'center',
    marginBottom: hp('6%')
  },
  arrow: {
    alignSelf: 'center',

  },
  skip: {
    marginTop: hp('8%'),
    marginRight: 40
  },
  title: {
    marginHorizontal: wp('10%'),
    marginTop: hp('20%'),
    alignItems: 'center'
  },
  titleName: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#5f5d70'
  },
  lorem: {
    color: '#666666',
    fontSize: 15,
    marginTop: wp('6%'),
    alignSelf: 'center'

  },

});