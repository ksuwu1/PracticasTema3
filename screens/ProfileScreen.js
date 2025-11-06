import React from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons'; 

import {
  Box,
  Heading,
  Text,
  Avatar,
  AvatarImage,
  Badge,
  BadgeIcon,
  BadgeText,
  Image,
  Pressable,
  VStack,
  HStack,
  Icon, // Necesario para el ícono anidado
} from '@gluestack-ui/themed';

// --- IMPORTAMOS TU NUEVO COMPONENTE ---
import ActionButtons from '../myComponents/ActionButtons';


// CUMPLE: Estilo, colores, organización
const COLORS = {
  BACKGROUND_LIGHT: '#F8F9FA',
  CARD_WHITE: '#FFFFFF',
  TEXT_DARK: '#212529',
  TEXT_SUBTLE: '#6c757d',
  ACCENT_LILA: '#b373ddff',
  STATUS_GREEN: '#34D399',
  SEPARATOR_LINE: '#E9ECEF',
};

export default function ProfileScreen() {
  const navigation = useNavigation();

  const userData = {
    name: 'Casandra Luna Rojas',
    title: 'Ingeniera en TIC',
    profilePic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDQWSGMOwsbHEUo291RfbOwuq-fXAGCcitZOrHthMgd_VYQQdu8SFuJ3dvLBEf75DdXzU&usqp=CAU',
    metrics: [
      { id: 1, value: 44, label: 'Siguiendo' },
      { id: 2, value: 4, label: 'Seguidores' },
      { id: 3, value: 0, label: 'Likes' },
    ],
  };

  const galleryImages = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZiomlQdbLGVnF3ndSNC8RzM4QPSYKfoWr6oLugoLuiuurKV_2mc_4q9VW6iWjCq4Grz0&usqp=CAU',
    'https://i.pinimg.com/474x/87/1b/2b/871b2b3339b175f5bf7861d67c7071aa.jpg',
    'https://64.media.tumblr.com/ea5603bf6fa8426f3af36b97ee46e24e/6fc0a93088727a8a-b7/s1280x1920/74b6a2d987120becf26ec4037c93c8dbc290fc10.jpg',
    'https://i.pinimg.com/564x/74/54/09/74540983206c8d25d38e77d6563357a3.jpg',
    'https://i.pinimg.com/236x/13/e4/3b/13e43b143fb28f65a92dc379b4315826.jpg',
    'https://i.pinimg.com/564x/71/d7/de/71d7de22b07374f3de038ef3fd98edb6.jpg',
    'https://i.pinimg.com/564x/e2/46/43/e246439e7d01c437efe569986a44a799.jpg',
  ];

  const handleSignOut = () => {
    navigation.navigate('Home');
  };

  // --- COMPONENTE GalleryGrid ACTUALIZADO ---
  // CUMPLE: Grid (Implementado con Box, flexWrap)
  const GalleryGrid = ({ images }) => (
    <Box
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="space-between"
      w="90%"
      pb="$10"
    >
      {images.map((uri, index) => (
        // Cada item del Grid es un Box
        <Box
          key={index}
          w="31%"
          aspectRatio={1}
          mb="$3"
          borderRadius="$md"
          overflow="hidden" // Escondemos lo que se salga del borde
        >
          {/* CUMPLE: Image (usado dentro del grid) */}
          <Image
            source={{ uri }}
            alt={`Imagen de galería ${index + 1}`}
            w="100%"
            h="100%"
            resizeMode="cover"
          />

          {/* CUMPLE: +nested (Icon anidado dentro del Box del Grid) */}
          {/* Este Box posiciona el ícono en la esquina inferior derecha */}
          <Box
            position="absolute"
            bottom="$1"
            right="$1"
            bg="$black"
            p="$1"
            borderRadius="$full"
            opacity={0.7} // Le damos un poco de transparencia
          >
            <Icon
              as={() => <MaterialIcons name="photo-camera" size={16} color="white" />}
              alt="ícono de cámara"
            />
          </Box>

        </Box>
      ))}
    </Box>
  );

  const MetricsBar = ({ metrics }) => (
    <HStack justifyContent="space-around" alignItems="center" w="90%" my="$5" px="$2">
      {metrics.map((metric, index) => (
        <React.Fragment key={metric.id}>
          {/* CUMPLE: Otro componente no visto (VStack) usado aquí */}
          <VStack alignItems="center" flex={1}>
            <Heading size="lg" color={COLORS.TEXT_DARK} mb="$1">{metric.value}</Heading>
            <Text size="sm" color={COLORS.TEXT_SUBTLE}>{metric.label}</Text>
          </VStack>
          {index < metrics.length - 1 && (
            <Box w="$0.5" h="80%" bg={COLORS.SEPARATOR_LINE} mx="$2" />
          )}
        </React.Fragment>
      ))}
    </HStack>
  );

  return (
    <Box flex={1} bg={COLORS.BACKGROUND_LIGHT}>
      <ScrollView>
        <VStack alignItems="center" pt="$8" bg={COLORS.CARD_WHITE}>

          <VStack alignItems="center" mb="$2" px="$6" w="100%">
            {/* CUMPLE: Avatar */}
            <Avatar size="xl" borderColor={COLORS.ACCENT_LILA} borderWidth={3} mb="$4">
              <AvatarImage
                source={{ uri: userData.profilePic }}
                alt="Foto de perfil del usuario"
              />
              <Badge
                h={16} w={16} borderRadius="$full"
                bg={COLORS.STATUS_GREEN}
                position="absolute" right={0} bottom={0}
                borderWidth={2} borderColor={COLORS.CARD_WHITE}
              />
            </Avatar>

            <Heading size="xl" color={COLORS.TEXT_DARK} mt="$2">
              {userData.name}
            </Heading>
            <Text size="md" color={COLORS.TEXT_SUBTLE} mb="$2">
              {userData.title}
            </Text>
          </VStack>

          {/* CUMPLE: Componente adicional creado por ti (MetricsBar) */}
          <MetricsBar metrics={userData.metrics} />

          <Box h="$0.5" w="90%" bg={COLORS.SEPARATOR_LINE} my="$2" />

          {/* CUMPLE: Componente adicional creado por ti (importado) */}
          <ActionButtons handleSignOut={handleSignOut} />

          <Heading size="lg" color={COLORS.TEXT_DARK} mt="$5" mb="$3" w="100%" px="$6">
            GALERIA DE FOTOS
          </Heading>

          {/* CUMPLE: Image (Imagen principal) */}
          <Image
            source={{ uri: galleryImages[0] }}
            alt="Paisaje principal de la galería"
            w="90%"
            h={150}
            borderRadius="$lg"
            mb="$4"
            resizeMode="cover"
          />

          {/* CUMPLE: Grid (uso de GalleryGrid) */}
          <GalleryGrid images={galleryImages.slice(1)} />

        </VStack>
      </ScrollView>
    </Box>
  );
}