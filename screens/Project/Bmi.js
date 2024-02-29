import React, { useState } from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Bmi() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('0');
    const [proportion, setProportion] = useState('Default');

    console.log("STATE : ", weight, height, bmi, proportion);

    const onPressButton = () => {
        console.log("Calculate button is pressed!!!");
        let output = (weight / (height / 100 * height / 100));
        setBmi(output.toFixed(2));

        let description = "";
        if (output < 18.5)
            description = "Underweight";
        else if (output >= 18.5 && output <= 24.9)
            description = "Normal";
        else if (output >= 25 && output <= 29.9)
            description = "Overweight";
        else if (output >= 30 && output <= 34.9)
            description = "Obese";
        else
            description = "Extremely Obese";

        setProportion(description);

    };

    return (
        <View style={{ flex: 1 }}>


            <View style={{ marginHorizontal: 20, marginTop: 50, padding: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 20, backgroundColor: 'white', marginBottom: 100 }}>

                <View style={{ padding: 10, backgroundColor: 'white', borderRadius: 10, height: 100, justifyContent: 'space-around' }} >
                    <Text style={{ fontSize: 20 }}>Weight (kg.) </Text>
                    <TextInput value={weight} onChangeText={(newWeight) => setWeight(newWeight)} style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 5 }} keyboardType="numeric" placeholder="Input your Weight …"></TextInput>
                </View>


                <View style={{ padding: 10, backgroundColor: 'white', borderRadius: 10, height: 100, justifyContent: 'space-around', marginTop: 10 }} >
                    <Text style={{ fontSize: 20 }}>Height (cm.) </Text>
                    <TextInput value={height} onChangeText={(newHeight) => setHeight(newHeight)} style={{ fontSize: 20, borderWidth: 1, borderColor: 'gray', borderRadius: 5 }} keyboardType="numeric" placeholder="Input your Height …"></TextInput>
                </View>

                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'gray', marginRight: 10, height: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>{bmi}</Text>
                    </View>
                    <View style={{ flex: 1, borderWidth: 1, borderColor: 'gray', marginLeft: 10, height: 100, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }} >
                        <Text style={{ fontSize: 20, textAlign: 'center' }}>  {proportion} </Text>
                    </View>
                </View>
                {/* <Button title="Calculate" onPress={ onPressButton } /> */}



            </View>
            <TouchableOpacity onPress={onPressButton}>
                <View style={{ marginBottom:10, backgroundColor: "blue", borderRadius: 15 }}>
                    <Text style={{ fontSize: 30, textAlign: "center", color: 'white' }}>
                        Calculate
                    </Text>
                </View>
            </TouchableOpacity>
        </View>
    );
}
