import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from "@expo/vector-icons";
import HomeStack from './HomeStack';
import Run from '../screens/Project/Run';
import Profile from '../screens/Project/Profile';
import Health from '../screens/Project/Health';
import Bmi from '../screens/Project/Bmi';


const Tab = createBottomTabNavigator();

export default function Bottom() {
    return (
        <Tab.Navigator>
            {/* <Tab.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    tabBarLabel: "หน้าหลัก",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false,
                }}
            /> */}
            <Tab.Screen
                name="Health"
                component={Health}
                options={{
                    tabBarLabel: "สุขภาพ",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="home" color={color} size={size} />),
                    headerShown: false,
                }}
            />
            <Tab.Screen
                name="Run"
                component={Run}
                options={{
                    tabBarLabel: "วิ่ง",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="circle" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="Bmi"
                component={Bmi}
                options={{
                    tabBarLabel: "BMI",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="laptop" color={color} size={size} />),
                }}
            />
            <Tab.Screen
                name="profile"
                component={Profile}
                options={{
                    tabBarLabel: "โปรไฟล์",
                    tabBarIcon: ({ color, size }) => (<FontAwesome name="user" color={color} size={size} />),
                }}
            />
        </Tab.Navigator>
    );


}
