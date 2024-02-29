import React from "react";
import { Button, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <FontAwesome name="user" color={"tomato"} size={50} />
            <Text style={{ marginVertical: 20, fontSize: 20 }}>ลงชื่อใช้งานที่นี่</Text>
            <Button title="เข้าสู่ระบบด้วย Email" onPress={() => { navigation.navigate('Login') }} />
        </View>
    );
}