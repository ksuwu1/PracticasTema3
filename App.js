
import 'react-native-gesture-handler';

import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './screens/HomeScreen';
import FormsScreen from './screens/FormsScreen';
import ProfileScreen from './screens/ProfileScreen';
import DisplayScreen from './screens/DisplayScreen'; // <-- NUEVA PANTALLA

// 2. Crea el navegador
const Drawer = createDrawerNavigator();

// 3. Define el "menú" con tus pantallas
function RootNavigator() {
    return (
        <Drawer.Navigator initialRouteName="Home">
            
            {/* 3. PANTALLA "HOME" (Principal) */}
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: 'Luna Rojas Casandra',
                    headerStyle: {
                        backgroundColor: '#b373ddff',
                    },
                    headerTintColor: '#ffffff', 
                    drawerItemStyle: { display: 'none' }
                }}
            />

            {/* 7. PANTALLA "FORMS" (en el drawer) */}
            <Drawer.Screen
                name="Forms"
                component={FormsScreen}
                options={{
                    title: 'Forms',
                    headerStyle: {
                        backgroundColor: '#b373ddff',
                    },
                    headerTintColor: '#ffffff',
                }}
            />

            {/* 8. PANTALLA "PROFILE" (en el drawer) */}
            <Drawer.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile', 
                    headerStyle: {
                        backgroundColor: '#b373ddff',
                    },
                    headerTintColor: '#ffffff',
                }}
            />
            
            {/* 9. PANTALLA "CARD" (¡NUEVA!) */}
            <Drawer.Screen
                name="Display" // Nombre de la ruta
                component={DisplayScreen}
                options={{
                    title: 'Display', // Título en el menú y cabecera
                    headerStyle: {
                        backgroundColor: '#b373ddff', // Tu color lila
                    },
                    headerTintColor: '#ffffff', // Texto blanco
                }}
            />

        </Drawer.Navigator>
    );
}

// 6. Envuelve todo
export default function App() {
    return (
        <GluestackUIProvider config={config}>
            <NavigationContainer>
                <RootNavigator />
            </NavigationContainer>
        </GluestackUIProvider>
    );
}