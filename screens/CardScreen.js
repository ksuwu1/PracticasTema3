import React from 'react';
import { ScrollView, Image } from 'react-native';
import {
  Box,
  Heading,
  Text,
  Button,
  ButtonText,
  VStack,
  Card,
} from '@gluestack-ui/themed';

export default function CardScreen({ navigation }) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#fff0f6' }}>
      <VStack space="xl" p="$5">

        <Heading
          size="xl"
          mb="$3"
          textAlign="center"
          color="#d63384"
          style={{ fontFamily: 'serif' }}
        >
          🌸 Sanrio Collection 🌸
        </Heading>

        <Card
          p="$5"
          rounded="$2xl"
          m="$3"
          alignSelf="center"
          width="90%"
          maxWidth={380}
          backgroundColor="#ffe6f1"
          shadowColor="#f8b5d4"
          style={{
            shadowOffset: { width: 0, height: 6 },
            shadowOpacity: 0.25,
            shadowRadius: 8,
            elevation: 6,
          }}
        >
          <Box width="100%" alignItems="center" mb="$4">
            <Image
              source={{
                uri: 'https://i.pinimg.com/474x/74/a3/06/74a306f4c4d2770d8114055de44837ef.jpg',
              }}
              style={{
                width: '100%',
                height: 240,
                borderRadius: 20,
                borderWidth: 3,
                borderColor: '#f8b5d4',
                resizeMode: 'cover',
              }}
            />
          </Box>

          <Text
            size="sm"
            mb="$2"
            color="#c9184a"
            style={{
              fontStyle: 'italic',
              textAlign: 'center',
              letterSpacing: 0.5,
            }}
          >
            Sanrio Merch 💕
          </Text>

          <VStack mb="$6">
            <Heading
              size="md"
              mb="$4"
              color="#d63384"
              textAlign="center"
              style={{ fontFamily: 'serif' }}
            >
              Hello Kitty
            </Heading>
            <Text
              size="sm"
              color="#555"
              textAlign="center"
              style={{ lineHeight: 20 }}
            >
              Marca y personaje ficticio producido por la compañía japonesa
              Sanrio — ¡el ícono más adorable y popular del mundo kawaii! 🎀
            </Text>
          </VStack>

          <Box
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            mt="$3"
          >
            <Button
              px="$5"
              py="$3"
              bg="#f8b5d4"
              rounded="$full"
              flex={1}
              mr="$2"
              style={{ shadowColor: '#f1a7c5', elevation: 3 }}
            >
              <ButtonText
                size="sm"
                color="#fff"
                style={{ fontWeight: 'bold', letterSpacing: 0.5 }}
              >
                🛒 Add to cart
              </ButtonText>
            </Button>

            <Button
              variant="outline"
              borderColor="#f8b5d4"
              px="$5"
              py="$3"
              rounded="$full"
              flex={1}
            >
              <ButtonText
                size="sm"
                color="#d63384"
                style={{ fontWeight: 'bold' }}
              >
                💖 Wishlist
              </ButtonText>
            </Button>
          </Box>
        </Card>

        {/* --- TABLA SIMULADA COQUETTE --- */}
        <Heading
          size="lg"
          mt="$5"
          color="#c9184a"
          textAlign="center"
          mb="$3"
          style={{ fontFamily: 'serif' }}
        >
          📊 Compras Recientes
        </Heading>

        <VStack
          mt="$3"
          space="md"
          bg="#fff"
          p="$4"
          rounded="$xl"
          borderWidth={1}
          borderColor="#f8b5d4"
          style={{
            shadowColor: '#f8b5d4',
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Box flexDirection="row" justifyContent="space-between" mb="$2">
            <Box flex={1}><Text bold color="#d63384">Customer Name</Text></Box>
            <Box flex={1} alignItems="center"><Text bold color="#d63384">Units</Text></Box>
            <Box flex={1} alignItems="flex-end"><Text bold color="#d63384">Costs</Text></Box>
          </Box>

          <Box flexDirection="row" justifyContent="space-between">
            <Box flex={1}><Text color="#444">Rajesh Kumar</Text></Box>
            <Box flex={1} alignItems="center"><Text color="#444">10</Text></Box>
            <Box flex={1} alignItems="flex-end"><Text color="#444">$130</Text></Box>
          </Box>

          <Box flexDirection="row" justifyContent="space-between">
            <Box flex={1}><Text color="#444">Priya Sharma</Text></Box>
            <Box flex={1} alignItems="center"><Text color="#444">12</Text></Box>
            <Box flex={1} alignItems="flex-end"><Text color="#444">$210</Text></Box>
          </Box>

          <Box
            flexDirection="row"
            justifyContent="space-between"
            borderTopWidth={1}
            borderColor="#f8b5d4"
            pt="$2"
            mt="$2"
          >
            <Box flex={1}><Text bold color="#d63384">Total</Text></Box>
            <Box flex={1} alignItems="center"><Text bold color="#d63384">22</Text></Box>
            <Box flex={1} alignItems="flex-end"><Text bold color="#d63384">$340</Text></Box>
          </Box>
        </VStack>
      </VStack>
    </ScrollView>
  );
}
