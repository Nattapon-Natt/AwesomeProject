import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/week6/Home';
import Ant from '../screens/week7/Ant';

import { FontAwesome } from "@expo/vector-icons";
import HomeStack from './HomeStack';
import Bird from '../screens/week7/Bird';
import Cat from '../screens/week7/Cat';
import AuthStack from './AuthStack';

const Tab = createBottomTabNavigator();

export default function BottomTab() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: "หน้าหลัก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Ant"
                component={Ant}
                options={{
                    tabBarLabel: "มด",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="bug" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="Bird"
                component={Bird}
                options={{
                    tabBarLabel: "นก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="twitter" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="Cat"
                component={Cat}
                options={{
                    tabBarLabel: "แมว",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="paw" color={color} size={size} />),
                }}
            />

            <Tab.Screen
                name="AuthStack"
                component={AuthStack}
                options={{
                    tabBarLabel: "บัญชี",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="user" color={color} size={size} />),
                    headerShown: false,
                }}
            />

        </Tab.Navigator>
    );


}
