import React, { useState, useEffect } from 'react';
import { ScrollView, Text } from 'react-native';
import Slider from '@react-native-community/slider';
import {
  Box,
  Heading,
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Checkbox,
  CheckboxGroup,
  CheckboxIndicator,
  CheckboxIcon,
  CheckIcon,
  Link,
  LinkText,
  Icon,
  LinkIcon,
  Pressable,
  Radio,
  RadioGroup,
  RadioIndicator,
  RadioIcon,
  CircleIcon,
  RadioLabel,
  Select,
  SelectTrigger,
  SelectInput,
  SelectIcon,
  ChevronDownIcon,
  SelectPortal,
  SelectBackdrop,
  SelectContent,
  SelectDragIndicatorWrapper,
  SelectDragIndicator,
  SelectItem,
  Switch,
  Textarea,
  TextareaInput,
  VStack,
} from '@gluestack-ui/themed';

// (d) Componente importado y creado por mi
const TituloPractica = ({ titulo, subtitulo }) => (
  <Box mb="$4" alignItems="center">
    <Heading size="lg">{titulo}</Heading>
    <Text style={{ fontSize: 16, color: '#666' }}>{subtitulo}</Text>
  </Box>
);

export default function FormsScreen({ navigation }) {
  const [isPressed, setIsPressed] = useState(false);
  const [radioValue, setRadioValue] = useState('opcion1');
  const [selectValue, setSelectValue] = useState('');
  const [sliderValue, setSliderValue] = useState(50);
  const [switchValue, setSwitchValue] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState(['opcion1']);
  const [isSliderActive, setIsSliderActive] = useState(false);
  const [isSingleChecked, setIsSingleChecked] = useState(false);

  useEffect(() => {
    if (navigation && navigation.setOptions) {
      navigation.setOptions({ gestureEnabled: !isSliderActive });
    }
  }, [isSliderActive, navigation]);

  const cardStyles = {
    bg: "$white",
    p: "$4",
    mb: "$4",
    borderRadius: "$xl",
    shadowColor: "$black",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8,
    
  };

  return (
    <ScrollView
      scrollEnabled={!isSliderActive}
      contentContainerStyle={{ paddingBottom: 50 }}
      canCancelContentTouches={!isSliderActive}
    >
      {/* (a) Pantalla dentro del Drawer Navigation con nombre en barra */}
      <Box flex={1} bg="$backgroundLight50" p="$4">
        <TituloPractica
          titulo="Gluestack Forms"
          subtitulo="Práctica del Tema 3: Componentes"
        />

        {/* (Tabla) Checkbox individual */}
        <Box {...cardStyles} mt="$4">
          <Heading size="md" mb="$2">Checkbox</Heading>
          <Checkbox
            value="single"
            aria-label="Checkbox"
            isChecked={isSingleChecked}
            onChange={(checked) => setIsSingleChecked(checked)}
            mt="$2"
          >
            <CheckboxIndicator mr="$2">
              <CheckboxIcon as={CheckIcon} />
            </CheckboxIndicator>
            <Text>Opción 1</Text>
          </Checkbox>
        </Box>

        {/* (Tabla) CheckboxGroup */}
        <Box {...cardStyles}>
          <Heading size="md" mb="$2">CheckboxGroup</Heading>
          <CheckboxGroup value={checkboxValues} onChange={setCheckboxValues}>
            <Checkbox value="opcion1" aria-label="Checkbox 1" mt="$2">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <Text>Opción 1</Text>
            </Checkbox>
            <Checkbox value="opcion2" aria-label="Checkbox 2" mt="$2">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <Text>Opción 2</Text>
            </Checkbox>
            <Checkbox value="opcion3" aria-label="Checkbox 3" mt="$2">
              <CheckboxIndicator mr="$2">
                <CheckboxIcon as={CheckIcon} />
              </CheckboxIndicator>
              <Text>Opción 3</Text>
            </Checkbox>
          </CheckboxGroup>
        </Box>

        {/* (Tabla) Link + Icon */}
        <Box {...cardStyles}>
          <Heading size="md" mb="$2">Link con Icono</Heading>
          <Link
            href="https://youtu.be/rh9MQEXC9GQ?si=XKfmFNJY761VZHuB"
            mt="$2"
            flexDirection="row"
            alignItems="center"
          >
            <Icon as={LinkIcon} size="sm" mr="$1" />
            <LinkText>Link a Youtube: Sade - Smooth Operator</LinkText>
          </Link>
        </Box>

        {/* (Tabla) Pressable con cambio de color */}
        <Box {...cardStyles}>
          <Heading size="md" mb="$2">Pressable</Heading>
          <Pressable
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
            mt="$2"
          >
            <Text style={{ color: isPressed ? '#3b82f6' : '#000', fontSize: 16 }}>
              ⮕ HAZ CLIC AQUÍ
            </Text>
          </Pressable>
        </Box>

        {/* (Tabla) Radio + RadioGroup + FormControl */}
        <FormControl {...cardStyles}>
          <FormControlLabel mb="$2">
            <FormControlLabelText>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>RadioGroup (FormControl)</Text>
            </FormControlLabelText>
          </FormControlLabel>
          <RadioGroup value={radioValue} onChange={setRadioValue}>
            <VStack space="md">
              <Radio value="opcion1">
                <RadioIndicator mr="$2">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Opción 1</RadioLabel>
              </Radio>
              <Radio value="opcion2">
                <RadioIndicator mr="$2">
                  <RadioIcon as={CircleIcon} />
                </RadioIndicator>
                <RadioLabel>Opción 2</RadioLabel>
              </Radio>
            </VStack>
          </RadioGroup>
        </FormControl>

        {/* (Tabla) Select controlado */}
        <FormControl {...cardStyles}>
          <FormControlLabel mb="$2">
            <FormControlLabelText>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Select</Text>
            </FormControlLabelText>
          </FormControlLabel>
          <Select selectedValue={selectValue} onValueChange={setSelectValue}>
            <SelectTrigger>
              <SelectInput placeholder="Elige una opción" />
              <SelectIcon as={ChevronDownIcon} mr="$3" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent>
                <SelectDragIndicatorWrapper>
                  <SelectDragIndicator />
                </SelectDragIndicatorWrapper>
                <SelectItem label="Opción A" value="opA" />
                <SelectItem label="Opción B" value="opB" />
                <SelectItem label="Opción C" value="opC" />
              </SelectContent>
            </SelectPortal>
          </Select>
        </FormControl>

        {/* (Tabla) Slider con valores min y max */}
        <FormControl {...cardStyles}>
          <FormControlLabel mb="$2">
            <FormControlLabelText>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Slider (Valor: {Math.round(sliderValue)})</Text>
            </FormControlLabelText>
          </FormControlLabel>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={0}
            maximumValue={100}
            step={1}
            value={sliderValue}
            onValueChange={setSliderValue}
            onSlidingStart={() => setIsSliderActive(true)}
            onSlidingComplete={() => setIsSliderActive(false)}
            minimumTrackTintColor="#3b82f6"
            maximumTrackTintColor="#B0BEC5"
            thumbTintColor="#3b82f6"
          />
        </FormControl>

        {/* (Tabla) Switch con estado */}
        <FormControl {...cardStyles}>
          <FormControlLabel>
            <FormControlLabelText>
              <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Switch (Estado: {switchValue ? 'On' : 'Off'})</Text>
            </FormControlLabelText>
          </FormControlLabel>
          <Switch
            onValueChange={setSwitchValue}
            isChecked={switchValue}
            alignSelf="flex-start"
            mt="$1"
          />
        </FormControl>

        {/* (Tabla) TextArea con FormControl */}
        <FormControl {...cardStyles}>
          <FormControlLabel>
            <FormControlLabelText>
              <Text style={{ fontWeight: 'bold', fontSize: 16 }}>TextArea</Text>
            </FormControlLabelText>
          </FormControlLabel>
          <Textarea>
            <TextareaInput placeholder="Escribe tus comentarios aquí..." />
          </Textarea>
        </FormControl>

        {/* (f) Competencias alcanzadas: abstracción, creatividad, comunicación, aplicación práctica */}
      </Box>
    </ScrollView>
  );
}
