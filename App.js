// ¡Importante! Esta línea DEBE estar al inicio
import 'react-native-gesture-handler';

import React from 'react';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from '@gluestack-ui/config';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

// 1. Importa tus tres pantallas
import HomeScreen from './screens/HomeScreen';
import FormsScreen from './screens/FormsScreen';
import ProfileScreen from './screens/ProfileScreen'; // Pantalla de la Práctica 3.2

// 2. Crea el navegador
const Drawer = createDrawerNavigator();

// 3. Define el "menú" con tus pantallas
function RootNavigator() {
    return (
        // 2. RUTA INICIAL es "Home" (tu pantalla principal)
        <Drawer.Navigator initialRouteName="Home">
            {/* 3. PANTALLA "HOME" (Principal) */}
            <Drawer.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    // 4. TU NOMBRE (como pide la práctica 3.2, Fig 1)
                    title: 'Luna Rojas Casandra',
                    headerStyle: {
                        // 5. APLICAR TU COLOR LILA
                        backgroundColor: '#b373ddff',
                    },
                    headerTintColor: '#ffffff', // Color del texto blanco
                    // 6. Oculta "Home" del menú (como en tu App.js original)
                    drawerItemStyle: { display: 'none' }
                }}
            />

            {/* 7. PANTALLA "FORMS" (en el drawer) */}
            <Drawer.Screen
                name="Forms"
                component={FormsScreen}
                options={{
                    title: 'Forms', // (Como en la Fig. 2 de la práctica)
                    headerStyle: {
                        // 5. APLICAR TU COLOR LILA
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
                    title: 'Profile', // (Como en la Fig. 2 de la práctica)
                    headerStyle: {
                        // 5. APLICAR TU COLOR LILA
                        backgroundColor: '#b373ddff',
                    },
                    headerTintColor: '#ffffff',
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