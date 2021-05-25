import React, { useEffect } from "react";
import { Image, View } from "react-native";
// navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import { createDrawerNavigator } from "@react-navigation/drawer";

import Home from './src/component/Home'
import GetStarted from './src/component/GetStarted'
import GetStarted1 from './src/component/GetStarted1'
import GetStarted2 from './src/component/GetStarted2'
import GetStarted3 from './src/component/GetStarted3'
import WelcomeUser from './src/component/WelcomeUser'
import SignIn from './src/component/SignIn'
import SignUp from './src/component/SignUp'
import Successfull from './src/component/Successfull'
import Detail from './src/component/Detail'
import Dashboard from './src/component/Dashboard'
import Profile from './src/component/Profile'
import Search from './src/component/Search'
import Categories from './src/component/Categories'
import HomeDetail from './src/component/HomeDetail'
import Description from './src/component/Description'
import ProfileDashboard from './src/component/ProfileDashboard'
import Selection from './src/component/Selection'
import Room from './src/component/Room'
import Feature from './src/component/Feature'
import Login from './src/component/Login'
import Verify from './src/component/Verify'
const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();

const HomeStack = () => (
  <Stack.Navigator initialRouteName="GetStarted" headerMode='none' >
 
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Verify"
      component={Verify}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Feature"
      component={Feature}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Description"
      component={Description}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Selection"
      component={Selection}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Room"
      component={Room}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="ProfileDashboard"
      component={ProfileDashboard}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="HomeDetail"
      component={HomeDetail}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Categories"
      component={Categories}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Search"
      component={Search}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="GetStarted"
      component={GetStarted}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Detail"
      component={Detail}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="GetStarted1"
      component={GetStarted1}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="GetStarted2"
      component={GetStarted2}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="GetStarted3"
      component={GetStarted3}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="WelcomeUser"
      component={WelcomeUser}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{
        animationEnabled: false
      }}
    />
    <Stack.Screen
      name="Successfull"
      component={Successfull}
      options={{
        animationEnabled: false
      }}
    />
  </Stack.Navigator>
);




// const ListStack = () => (
//   <Stack.Navigator initialRouteName="ProducersDetail" headerMode='none'>

//     <Stack.Screen
//       name="ProducersDetail"
//       component={ProducersDetail}
//       options={{
//         animationEnabled: false
//       }}
//     />
//   </Stack.Navigator>
// );

// const ProfileStack = () => (
//   <Stack.Navigator>
//     <Stack.Screen name="Profile" component={Profile} />
//   </Stack.Navigator>
// );

// const BottomNavigation = ({ navigation }) => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         // keyboardHidesTabBar: true,
//         style: {
//           borderTopWidth: 0,
//           borderTopColor: "transparent",
//         },
//         borderTopColor: "transparent",
//         inactiveTintColor: 'gray',
//         activeBackgroundColor: '#FCA311',
//         inactiveBackgroundColor: '#000'
//       }}
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused }) => {
//           var tintColor = '#fff';
//           var border = { borderRadius: 200 };
//           var icon;

//           switch (route.name) {
//             case 'Home':
//               icon = Icons.home;
//               border = {};
//               break;
//             case 'Search':
//               icon = Icons.take_shot;
//               border = {};
//               break;

//             case 'Movie':
//               icon = Icons.player;
//               border = {};
//               break;

//             case 'Player':
//               icon = Icons.list;
//               border = {};
//               break;

//             case 'Account':
//               icon = Icons.account;
//               border = {};

//               break;
//             default:
//               break;
//           }

//           return (
//             <View style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
//               <Image
//                 source={icon}
//                 resizeMode="contain"
//                 style={[
//                   tintColor,
//                   border,
//                   {
//                     marginTop: 0,
//                     height: 25,
//                     width: 25,
//                   },
//                 ]}
//               />
//             </View>
//           );
//         },
//       })}>
//       <Tab.Screen
//         name="Home"
//         component={HomeStack}
//         options={{
//           tabBarLabel: () => null,
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchStack}
//         options={{
//           tabBarLabel: () => null,
//         }}
//       />
//       <Tab.Screen
//         name="Movie"
//         component={MovieStack}
//         options={{
//           tabBarLabel: () => null,
//         }}
//       />
//       <Tab.Screen
//         name="Player"
//         component={ListStack}
//         options={{
//           tabBarLabel: () => null,
//         }}
//       />
//       <Tab.Screen
//         name="Account"
//         component={MeetUp}
//         options={{
//           tabBarLabel: () => null,
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// const DrawerNavigation = () => (
//   <Drawer.Navigator drawerPosition="right" initialRouteName="Home" drawerContent={props => <SideMenu {...props} />}>
//     <Drawer.Screen name="Home" component={BottomNavigation} />
//     <Drawer.Screen name="Profile" component={ProfileStack} />
//   </Drawer.Navigator>
// );



export default () => {

  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
};