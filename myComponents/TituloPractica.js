import React from 'react';
// Importamos componentes de Gluestack (los archivos locales)
import { Box } from '../components/ui/box';
import { Heading } from '../components/ui/heading';
import { Text } from '../components/ui/text';

// Tu componente personalizado
// Acepta 'titulo' y 'subtitulo' como props
export default function TituloPractica({ titulo, subtitulo }) {
  return (
    // 1. Añadimos 'alignItems="center"' para centrar todo el contenido
    <Box bg="$primary100" p="$4" mb="$4" borderRadius="$md" alignItems="center">
      
      {/* 2. Aumentamos el tamaño del Heading a '2xl' */}
      <Heading size="2xl" color="$primary800">{titulo}</Heading>
      
      {/* 3. Aumentamos el tamaño del Text a 'lg' */}
      <Text color="$primary600" size="lg">{subtitulo}</Text>
    
    </Box>
  );
}