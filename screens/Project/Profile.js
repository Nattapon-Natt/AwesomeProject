import React, { useState } from 'react';
import { View, Image, Text, ScrollView, TextInput } from 'react-native';
import MyIcon from '../../components/week3/MyIcon';
import { FontAwesome } from "@expo/vector-icons";

export default function Profile() {
    

    return (
        // <ScrollView>
        //     <View style={{ flex: 1, flexDirection: 'column' }}>
        //         <View style={{ marginHorizontal: 20, marginTop: 50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white' }}>

        //             <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
        //                 <FontAwesome name="user" size={30} color="orange" />
        //                 <Text style={{ alignSelf: 'center' }}>Sign in</Text>
        //             </View>

        //             <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
        //                 <FontAwesome name="user" size={30} color="orange" />
        //                 <Text style={{ alignSelf: 'center' }}> Competition</Text>
        //             </View>

        //             <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
        //                 <FontAwesome name="user" size={30} color="orange" />
        //                 <Text style={{ alignSelf: 'center' }}>Connected apps</Text>
        //             </View>

        //             <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
        //                 <FontAwesome name="user" size={30} color="orange" />
        //                 <Text style={{ alignSelf: 'center' }}>Transfer from Zeep Life</Text>
        //             </View>

        //             <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
        //                 <FontAwesome name="user" size={30} color="orange" />
        //                 <Text style={{ alignSelf: 'center' }}>Feedback</Text>
        //             </View>

        //             <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
        //                 <FontAwesome name="user" size={30} color="orange" />
        //                 <Text style={{ alignSelf: 'center' }}>Apppermissions</Text>
        //             </View>

        //             <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
        //                 <FontAwesome name="user" size={30} color="orange" />
        //                 <Text style={{ alignSelf: 'center' }} t>Settings</Text>
        //             </View>
        //         </View>

        //     </View>
        // </ScrollView>
        <ScrollView>
            <View style={{ marginHorizontal: 20, marginVertical: 20, justifyContent: 'center', alignItems: 'center' }}>
                <FontAwesome name="user" size={200} />
            </View>
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ marginHorizontal: 20, marginTop: 50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white', marginBottom: 100 }}>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Name</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Sex</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Date of birth</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Height</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput>
                    </View>

                    <View style={{ flexDirection: "row", marginTop: 10, justifyContent: "space-between", marginVertical: 20 }}>
                        <Text style={{ alignSelf: 'center' }}>Weight</Text>
                        <TextInput style={{ borderWidth: 1, borderColor: 'gray', borderRadius: 10 }}></TextInput>
                    </View>
                </View>

            </View>
            {/* <Button  title="Next" onPress={() => navigation.navigate("Bottom")} /> */}
        </ScrollView>
    );
}
