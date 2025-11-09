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
  Badge,
  BadgeText,
  BadgeIcon,
  useToast,
  Toast,
  ToastTitle,
  ToastDescription,
  Icon,
  HStack,
} from '@gluestack-ui/themed';
import {
  ShoppingCart,
  AlertCircle,
  CheckCircle,
  BarChart2,
} from 'lucide-react-native';

// ✅ Cumple con: "Agregar componente Table dentro de un Card"
import {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableData,
} from '../components/ui/table';

export default function DisplayScreen() {
  const toast = useToast();

  const recentPurchases = [
    { id: 1, customer: 'Hello Kitty', units: 10, cost: 130, isSoldOut: true },
    { id: 2, customer: 'Kuromi', units: 12, cost: 210, isSoldOut: true },
    { id: 3, customer: 'Melody', units: 5, cost: 80, isSoldOut: false },
  ];

  const totalUnits = recentPurchases.reduce((acc, item) => acc + item.units, 0);
  const totalCost = recentPurchases.reduce((acc, item) => acc + item.cost, 0);

  // ✅ Cumple con: "Toast al presionar Add to cart" y el Ícono
  const handleAddToCart = () => {
    toast.show({
      placement: 'bottom',
      duration: 3000,
      render: ({ id }) => (
        <Toast
          nativeID={id}
          action="success"
          bg="$success100"
          borderRadius="$lg"
          px="$4"
          py="$4"
          w="100%"
          alignSelf="center"
        >
          <HStack space="sm" alignItems="center">
            <Icon as={CheckCircle} color="$success800" size="lg" /> 
            <VStack space="none">
              <ToastTitle color="$success800" fontWeight="bold">
                Success
              </ToastTitle>
              <ToastDescription color="$success700" fontSize="$sm">
                ¡Se ha agregado correctamente al Carrito de Compras!
              </ToastDescription>
            </VStack>
          </HStack>
        </Toast>
      ),
    });
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#ffe6f1' }}>
      <VStack space="xl" p="$5">
        <Heading
          size="x4"
          mb="$0"
          textAlign="center"
          color="#c9184a"
          style={{ fontFamily: 'serif', fontWeight: 'bold' }}
        >
          🌸 Sanrio Collection 🌸
        </Heading>

        {/* ✅ Cumple con: "Componente Card e Image" */}
        <Card
          p="$5"
          rounded="$2xl"
          m="$3"
          alignSelf="center"
          width="90%"
          maxWidth={380}
          backgroundColor="#ffffffff"
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
            Sanrio Merch.
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
              onPress={handleAddToCart}
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

        {/* ✅ Cumple con: "Título e icono de la sección de tabla" */}
        <HStack alignItems="center" justifyContent="center" mb="$3" space="sm" mt="$4">
          <Icon as={BarChart2} color="#c9184a" size={24} />
          <Heading
            size="lg"
            color="#c9184a"
            style={{
              fontFamily: 'serif',
              fontWeight: 'bold',
              letterSpacing: 0.5,
            }}
          >
            Compras Recientes
          </Heading>
        </HStack>

        {/* ✅ Cumple con: "Tabla dentro de un Card con columna ST y centrado de datos" */}
        <Card
          bg="#fff"
          p="$4"
          rounded="$2xl"
          borderWidth={1}
          borderColor="#f8b5d4"
          width="95%"
          alignSelf="center"
          style={{
            shadowColor: '#f8b5d4',
            shadowOpacity: 0.3,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Table>
            <TableHeader>
              <TableRow
                style={{
                  borderBottomWidth: 1,
                  borderColor: '#f8b5d4',
                  paddingVertical: 8,
                }}
              >
                <TableHead style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                  <Text bold color="#d63384" style={{ fontSize: 16, textAlign: 'center' }}>
                    Product
                  </Text>
                </TableHead>
                <TableHead style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text bold color="#d63384" style={{ fontSize: 16, textAlign: 'center' }}>
                    Units
                  </Text>
                </TableHead>
                <TableHead style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text bold color="#d63384" style={{ fontSize: 16, textAlign: 'center' }}>
                    Cost
                  </Text>
                </TableHead>
                <TableHead style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text bold color="#d63384" style={{ fontSize: 16, textAlign: 'center' }}>
                    ST
                  </Text>
                </TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {recentPurchases.map((item, index) => (
                <TableRow
                  key={item.id}
                  style={{
                    borderBottomWidth: index < recentPurchases.length - 1 ? 1 : 0,
                    borderColor: '#f5c6dc',
                    paddingVertical: 10,
                  }}
                >
                  <TableData style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                    <Text color="#444" style={{ fontSize: 15, textAlign: 'center' }}>
                      {item.customer}
                    </Text>
                  </TableData>

                  <TableData style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>{item.units}</Text>
                  </TableData>

                  <TableData style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ textAlign: 'center' }}>${item.cost}</Text>
                  </TableData>

                  <TableData style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    {item.isSoldOut ? (
                      <Badge bg="#f8b5d4" rounded="$full" px="$2" py="$1">
                        <BadgeIcon as={AlertCircle} color="#fff" size="xs" />
                        <BadgeText color="#fff" fontSize={10}>
                          SOLD OUT
                        </BadgeText>
                      </Badge>
                    ) : (
                      <Icon as={ShoppingCart} size={18} color="#c9184a" />
                    )}
                  </TableData>
                </TableRow>
              ))}
            </TableBody>

            <TableFooter>
              <TableRow
                style={{
                  borderTopWidth: 1,
                  borderColor: '#f8b5d4',
                  marginTop: 8,
                  paddingTop: 10,
                }}
              >
                <TableData style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center' }}>
                  <Text bold color="#d63384" style={{ fontSize: 16, textAlign: 'center' }}>
                    Total
                  </Text>
                </TableData>
                <TableData style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text bold color="#d63384" style={{ fontSize: 16, textAlign: 'center' }}>
                    {totalUnits}
                  </Text>
                </TableData>
                <TableData style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                  <Text bold color="#d63384" style={{ fontSize: 16, textAlign: 'center' }}>
                    ${totalCost}
                  </Text>
                </TableData>
                <TableData style={{ flex: 1 }} />
              </TableRow>
            </TableFooter>
          </Table>
        </Card>
      </VStack>
    </ScrollView>
  );
}
