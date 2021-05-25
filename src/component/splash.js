import React from 'react';
import { View, Text, TouchableOpacity, Image, ImageBackground } from 'react-native';

export default class splash extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {

        setTimeout(() => { this.props.navigation.navigate('verification') }, 3000);

    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
                    <Image source = {require('./../image/logoSplash1.png')} style={{width: 200, height: 200, justifyContent: 'center', alignItems: 'center' }}/>
            </View>
        );
    }
}

