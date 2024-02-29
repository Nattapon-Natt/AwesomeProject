import React from 'react';
import { View, Image, ScrollView, Text, TextInput } from 'react-native';

export default function Profile() {

    return (
        <ScrollView>
            <View style={{ marginHorizontal: 20, marginTop: 50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>
            <Image  style={{ width: 150, height: 250, borderRadius: 10, alignSelf:'center' }} source={{ uri: "https://c.tenor.com/Pvf58wBw6aAAAAAC/tenor.gif" }} />
            

            </View>

            {/* ก้อนที่1 */}
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ marginHorizontal: 20, marginTop: 50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Run</Text>
                        {/* <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput> */}
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Run Kilos</Text>
                        {/* <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput> */}
                    </View>
                </View>

            </View>

            {/* ก้อนที่2 */}
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ marginHorizontal: 20, marginTop: 10, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Cals</Text>
                        {/* <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput> */}
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Cals Burn</Text>
                        {/* <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput> */}
                    </View>
                </View>

            </View>

            {/* ก้อนที่3 */}
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ marginHorizontal: 20, marginTop: 10, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white', marginBottom: 100 }}>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Times</Text>
                        {/* <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput> */}
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Times to run</Text>
                        {/* <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput> */}
                    </View>
                </View>

            </View>

        </ScrollView>
    );
}
