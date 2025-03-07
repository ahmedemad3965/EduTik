import React from 'react'
import { View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { Feather } from '@expo/vector-icons';
import { FontAwesome5, Ionicons } from '@expo/vector-icons';
import CameraScreen from '../../screens/camera';
import ProfileScreen from '../../screens/profile';
import SearchScreen from '../../screens/search';
import AwardsScreen from '../../screens/award';
import FeedNavigation from '../feed';
import { useChats } from '../../hooks/useChats';

const Tab = createMaterialBottomTabNavigator()


export default function HomeScreen() {
    useChats();

    return (
        <Tab.Navigator
            barStyle={{ backgroundColor: 'black' }}
            initialRouteName="feed">
            <Tab.Screen
                name="Learn"
                component={FeedNavigation}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="school-outline" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Discover"
                component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Add"
                component={CameraScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="plus-square" size={24} color={color} />
                    )
                }}
            />
            <Tab.Screen
                name="Awards"
                component={AwardsScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome5 name="award" size={24} color={color} />)
                }}
            />
            <Tab.Screen
                name="Me"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="user" size={24} color={color} />
                    )
                }}
                initialParams={{ initialUserId: null }}
            />
        </Tab.Navigator>

    )
}
