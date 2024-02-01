import React from "react";
import { Image, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function DisplayImage(props) {
    if (props.image) {
        //HAS IMAGE
        return (
            <View style={{ margin: 10, alignItems: "center" }}>
                <Image source={{ uri: props.image ? props.image : null }} style={{ width: 100, height: 100 }} />
                <Text>{props.image}</Text>
            </View>
        );
    } else {
        // NO IMAGE
        return (
            <View style={{ margin: 10, alignItems: "center" }}>
                <FontAwesome name="image" size={50} color="#848484" />
                <Text>Select Image</Text>
            </View>
        );
    }
}


