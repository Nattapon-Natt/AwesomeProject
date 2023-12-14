import React from 'react';
import { Image, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


export default function Section1() {
    return (
        <View style={{ flex: 1 }}>

            <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="arrow-left" size={20} color='orange'  />
                <Image style={{ flex: 1, resizeMode: 'cover', aspectRatio: 16 / 9 }} source={require('../../assets/week3/room-6.jpg')} />
            </View>
           

        </View>
    );
}