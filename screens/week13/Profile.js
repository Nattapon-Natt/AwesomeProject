import React, { useContext, useEffect, useState } from "react";
import { Button, Text, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AuthService from "../../services/AuthService";
import { AuthContext } from "../../hooks/AuthContextProvider";
import UserTokenStorage from "../../storages/UserTokenStorage";

export default function Profile() {
    const { userToken, setUserToken } = useContext(AuthContext);

    const [user, setUser] = useState(null);

    const onLoad = async () => {
        let u = await AuthService.getUser(userToken);
        setUser(u);
    };

    useEffect(() => { onLoad(); }, [userToken]);

    const onLogout = async () => {
        setUserToken("");
        UserTokenStorage.writeItem("");

    };


    if (!user) return (<View></View>)

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }} >
            <Text style={{ marginVertical: 10 }}>Profile Page</Text>
            <Text style={{ marginVertical: 10 }}>{JSON.stringify(user)}</Text>
            <FontAwesome name="user" color={"tomato"} size={100} style={{ marginVertical: 10 }} />
            <Button title="Logout" onPress={onLogout} />
        </View>
    );
}