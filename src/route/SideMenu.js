// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { NavigationActions } from 'react-navigation';
// import { Text, TouchableOpacity, View, Image, ImageBackground } from 'react-native';
// import { TextInput, ScrollView } from 'react-native-gesture-handler';
// import { Icon } from 'react-native-elements'
// import { AntDesign, Entypo } from '@expo/vector-icons';
// import { FontAwesome } from '@expo/vector-icons';
// //ios-arrow-back  ios-arrow-round-back  Ionicons
// export default class SideMenu extends Component {

//   constructor(props) {
//     super(props);
//   }

//   render() {
//     return (
//       <View style={{ flex: 1, }}>
//         <ImageBackground source={require('./../image/DashBg2.png')} style={{ width: '100%', height: '100%', }} resizeMode='stretch' >
//           <ScrollView>
//             <TouchableOpacity style={{ marginTop: 30, marginLeft: 20 }} onPress={() => { this.props.navigation.closeDrawer() }}>
//               <Entypo
//                 name='cross'
//                 type='font-awesome'
//                 color='#fff'
//                 size={40}
//                 containerStyle={{ width: width(10) }}
//               />
//             </TouchableOpacity>
//             <View style={{ alignItems: 'center', marginTop: 80 }}>
//               <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile') }} style={{}}>
//                 <View style={{ height: 50, }}>
//                   <Text style={{ fontWeight: 'bold', marginVertical: 10, alignSelf: 'center', fontSize: 21, color: '#fff' }}>Profile Details</Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => { this.props.navigation.navigate('transation') }} style={{ marginTop: 20 }}>
//                 <View style={{ height: 50, }}>
//                   <Text style={{ fontWeight: 'bold', marginVertical: 10, alignSelf: 'center', fontSize: 21, color: '#fff' }}>Transaction</Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => { this.props.navigation.navigate('homeTransction') }} style={{ marginTop: 20 }}>
//                 <View style={{ height: 50, }}>
//                   <Text style={{ fontWeight: 'bold', marginVertical: 10, alignSelf: 'center', fontSize: 21, color: '#fff' }}>Payment Receipt</Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => { this.props.navigation.navigate('work') }} style={{ marginTop: 20 }}>
//                 <View style={{ height: 50, }}>
//                   <Text style={{ fontWeight: 'bold', marginVertical: 10, alignSelf: 'center', fontSize: 21, color: '#fff' }}>How it Work</Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => { this.props.navigation.navigate('contact') }} style={{ marginTop: 20 }}>
//                 <View style={{ height: 50, }}>
//                   <Text style={{ fontWeight: 'bold', marginVertical: 10, alignSelf: 'center', fontSize: 21, color: '#fff' }}>Contact Us</Text>
//                 </View>
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => { this.props.navigation.navigate('verification') }} style={{ marginTop: 60 }}>
//                 <View style={{ height: 50, }}>
//                   <Text style={{ fontWeight: 'bold', marginVertical: 10, alignSelf: 'center', fontSize: 21, color: '#fff' }}>Logout</Text>
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </ScrollView>
//         </ImageBackground>
//       </View>
//     );
//   }
// }


