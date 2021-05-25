import React from 'react';
import { StyleSheet, Text, View, Modal, TextInput, Dimensions, TouchableOpacity, Button } from 'react-native';
import { AntDesign , Ionicons} from '@expo/vector-icons';
const { width: WIDTH } = Dimensions.get('window')
import { ScrollView } from 'react-native-gesture-handler';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class password extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ backgroundColor: '#000', height: '4%' }}></View>
                <TouchableOpacity onPress={() => { this.props.navigation.navigate('profile') }} style={{ marginTop: '5%', flexDirection: 'row' }}>
                    <View style={{ marginLeft: '7%' }}>
                        <Ionicons name='ios-arrow-back' color='#000' size={24}
                        />
                    </View>
                    <View style={{ marginTop: 0, alignItems: 'center' }}>
                        <Text style={{ fontSize: 18, marginLeft: '4%', color: '#000', fontWeight: 'bold' }}>Back</Text>
                    </View>
                </TouchableOpacity>
                <ScrollView>
                <Text style={{ marginLeft: '8%', marginTop: 10, fontSize: 20, fontWeight: 'bold' }}>Create Password</Text>
                    <Text style={{ marginLeft: '8%', marginTop: 10, fontSize: 15, fontWeight: 'bold' }}>Password</Text>
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Password'}
                                secureTextEntry = {true}
                                placeholderTextColor={'#ccc'}
                            />
                        </View>
                    </View>
                    <Text style={{ marginLeft: '8%', marginTop: 10, fontSize: 15, fontWeight: 'bold' }}>Confirm Password</Text>
                    <View style={{ marginTop: 10 }}>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.input}
                                placeholder={'Confirm Password'}
                                secureTextEntry = {true}
                                placeholderTextColor={'#ccc'}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonModal}
                        onPress={
                            () => this.props.navigation.navigate('profile')}>
                        <Text style={styles.buttonTextModal}>CREATE PASSWORD</Text>
                    </TouchableOpacity>
                </ScrollView>
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
    inputContainer: {
        alignItems: 'center',
    },
    input: {
        width: WIDTH - 55,
        height: 55,
        padding: 15,
        marginBottom: 10,
        borderWidth: 1,
        borderRadius: 3,
        borderColor: '#ececec',
    },
    buttonTextModal: {
        alignSelf: 'center',
        color: '#fff',
        marginTop: 15,
        fontWeight: 'bold',
        fontSize: 20,
        marginLeft: 15
      },
      buttonModal: {
        backgroundColor: '#149c83', marginTop: '10%', marginBottom: 10,
        borderRadius: 3,marginHorizontal: wp('5%'), height: 60
      }
});