import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import {
  Box,
  Heading,
  Text,
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

// 🌷 Título decorativo
const TituloPractica = ({ titulo, subtitulo }) => (
  <Box mb="$5" alignItems="center">
    <Heading
      size="lg"
      style={{
        color: '#E75480',
        fontWeight: '700',
        letterSpacing: 0.5,
        textShadowColor: 'rgba(231, 84, 128, 0.25)',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 4,
      }}
    >
      {titulo}
    </Heading>
    <Text style={{ fontSize: 16, color: '#8B6D75', marginTop: 4 }}>
      {subtitulo}
    </Text>
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

  // 🌸 Estilo de tarjetas suaves
  const cardStyles = {
    bg: '#fff0f5',
    p: '$5',
    mb: '$5',
    borderRadius: 20,
    shadowColor: '#E75480',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 6,
    borderWidth: 1,
    borderColor: '#fbc4d3',
  };

  return (
    <ScrollView
      scrollEnabled={!isSliderActive}
      contentContainerStyle={{ paddingBottom: 50 }}
      style={{ flex: 1, backgroundColor: '#fffafc' }}
    >
      <Box flex={1} p="$5" alignItems="center">
        <TituloPractica
          titulo="✨ Gluestack Forms ✨"
          subtitulo="Componentes de Gluestack."
        />

        {/* Checkbox individual */}
        <Box {...cardStyles} width="100%">
          <Heading size="md" mb="$2" color="#C94F7C">
            Checkbox
          </Heading>
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
            <Text color="#6B5E62">Opción 1</Text>
          </Checkbox>
        </Box>

        {/* CheckboxGroup */}
        <Box {...cardStyles} width="100%">
          <Heading size="md" mb="$2" color="#C94F7C">
            CheckboxGroup
          </Heading>
          <CheckboxGroup value={checkboxValues} onChange={setCheckboxValues}>
            {['Opción 1', 'Opción 2', 'Opción 3'].map((op, i) => (
              <Checkbox value={`opcion${i + 1}`} key={op} mt="$2">
                <CheckboxIndicator mr="$2">
                  <CheckboxIcon as={CheckIcon} />
                </CheckboxIndicator>
                <Text color="#6B5E62">{op}</Text>
              </Checkbox>
            ))}
          </CheckboxGroup>
        </Box>

        {/* Link */}
        <Box {...cardStyles} width="100%">
          <Heading size="md" mb="$2" color="#C94F7C">
            Link con Icono
          </Heading>
          <Link
            href="https://youtu.be/rh9MQEXC9GQ?si=XKfmFNJY761VZHuB"
            flexDirection="row"
            alignItems="center"
          >
            <Icon as={LinkIcon} size="sm" mr="$1" color="#E75480" />
            <LinkText color="#E75480">
              Sade - Smooth Operator 🎶
            </LinkText>
          </Link>
        </Box>

        {/* Pressable */}
        <Box {...cardStyles} width="100%">
          <Heading size="md" mb="$2" color="#C94F7C">
            Pressable
          </Heading>
          <Pressable
            onPressIn={() => setIsPressed(true)}
            onPressOut={() => setIsPressed(false)}
          >
            <Text
              style={{
                color: isPressed ? '#E75480' : '#333',
                fontSize: 16,
                textAlign: 'center',
              }}
            >
              ⮕ ¡Haz clic aquí!
            </Text>
          </Pressable>
        </Box>

        {/* RadioGroup */}
        <FormControl {...cardStyles} width="100%">
          <FormControlLabel mb="$2">
            <FormControlLabelText>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#C94F7C' }}>
                RadioGroup (FormControl)
              </Text>
            </FormControlLabelText>
          </FormControlLabel>
          <RadioGroup value={radioValue} onChange={setRadioValue}>
            <VStack space="md">
              {['Opción 1', 'Opción 2'].map((op, i) => (
                <Radio key={op} value={`opcion${i + 1}`}>
                  <RadioIndicator mr="$2">
                    <RadioIcon as={CircleIcon} color="#E75480" />
                  </RadioIndicator>
                  <RadioLabel color="#6B5E62">{op}</RadioLabel>
                </Radio>
              ))}
            </VStack>
          </RadioGroup>
        </FormControl>

        {/* Select */}
        <FormControl {...cardStyles} width="100%">
          <FormControlLabel mb="$2">
            <FormControlLabelText>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#C94F7C' }}>
                Select
              </Text>
            </FormControlLabelText>
          </FormControlLabel>
          <Select selectedValue={selectValue} onValueChange={setSelectValue}>
            <SelectTrigger bg="#ffe4ec">
              <SelectInput placeholder="Elige una opción" color="#6B5E62" />
              <SelectIcon as={ChevronDownIcon} mr="$3" />
            </SelectTrigger>
            <SelectPortal>
              <SelectBackdrop />
              <SelectContent bg="#fff0f5">
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

        {/* Slider */}
        <FormControl {...cardStyles} width="100%">
          <FormControlLabel mb="$2">
            <FormControlLabelText>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#C94F7C' }}>
                Slider (Valor: {Math.round(sliderValue)})
              </Text>
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
            minimumTrackTintColor="#E75480"
            maximumTrackTintColor="#F5C6D0"
            thumbTintColor="#E75480"
          />
        </FormControl>

        {/* Switch */}
        <FormControl {...cardStyles} width="100%">
          <FormControlLabel>
            <FormControlLabelText>
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#C94F7C' }}>
                Switch (Estado: {switchValue ? 'On' : 'Off'})
              </Text>
            </FormControlLabelText>
          </FormControlLabel>
          <Switch
            onValueChange={setSwitchValue}
            isChecked={switchValue}
            alignSelf="flex-start"
            mt="$2"
          />
        </FormControl>

        {/* TextArea */}
        <FormControl {...cardStyles} width="100%">
          <FormControlLabel>
            <FormControlLabelText>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: '#C94F7C' }}>
                TextArea
              </Text>
            </FormControlLabelText>
          </FormControlLabel>
          <Textarea bg="#ffe4ec" borderColor="#fbc4d3">
            <TextareaInput placeholder="Escribe tus comentarios aquí..." color="#6B5E62" />
          </Textarea>
        </FormControl>
      </Box>
    </ScrollView>
  );
}
