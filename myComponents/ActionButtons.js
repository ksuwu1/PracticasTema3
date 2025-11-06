import React from 'react';
import { Pressable, HStack, Icon } from '@gluestack-ui/themed';
import { MaterialIcons } from '@expo/vector-icons';

// Definimos solo los colores que este componente necesita
const COLORS = {
    BACKGROUND_LIGHT: '#F8F9FA',
    ACCENT_LILA: '#b373ddff',
};

// CUMPLE: Componente adicional creado por ti (importado)
// Recibe la función 'handleSignOut' como prop
const ActionButtons = ({ handleSignOut }) => (
    <HStack justifyContent="space-around" w="100%" maxWidth={320} my="$5" mb="$6">

        {/* Botón de Perfil (Simulado) */}
        <Pressable
            bg={COLORS.BACKGROUND_LIGHT} p="$3.5" borderRadius="$lg" w={60} h={60}
            alignItems="center" justifyContent="center" shadow="2"
        >
            {/* CUMPLE: Icon (usando MaterialIcons) */}
            <Icon as={() => <MaterialIcons name="person" size={24} color={COLORS.ACCENT_LILA} />} />
        </Pressable>

        {/* Botón de Like/Favorito */}
        <Pressable
            bg={COLORS.BACKGROUND_LIGHT} p="$3.5" borderRadius="$lg" w={60} h={60}
            alignItems="center" justifyContent="center" shadow="2"
        >
            {/* CUMPLE: Icon (usando MaterialIcons) */}
            <Icon as={() => <MaterialIcons name="favorite" size={24} color={COLORS.ACCENT_LILA} />} />
        </Pressable>

        {/* Botón SALIR (Usamos el ícono de logout) */}
        <Pressable
            bg={COLORS.BACKGROUND_LIGHT} p="$3.5" borderRadius="$lg" w={60} h={60}
            alignItems="center" justifyContent="center" shadow="2"
            onPress={handleSignOut}
        >
            {/* CUMPLE: Icon (usando MaterialIcons) */}
            <Icon as={() => <MaterialIcons name="logout" size={24} color={COLORS.ACCENT_LILA} />} />
        </Pressable>
    </HStack>
);

export default ActionButtons;