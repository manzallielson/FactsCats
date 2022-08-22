import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import {
  Input,
  Flex,
  Text,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface Iprops extends ChakraInputProps {
  errorMessage?: string;
  borderColor?: string;
  textPlaceholder?: string;
  maxLength?: number;
  min?: number;
  max?: number;
  variant?: string;
  textLabel?: string;
  fontSize?: string;
  colorLabel?: string;
  isError?: boolean;
  width?: string;
  labelWidth?: string;
}

export default function InputComponent({
  errorMessage,
  borderColor,
  textPlaceholder,
  textAlign,
  maxLength,
  min,
  max,
  textLabel,
  fontSize,
  colorLabel,
  isError,
  variant,
  width,
  labelWidth,

  onChange,
  ...rest
}: Iprops) {
  //   const [input, setInput] = useState<number>();
  //   const [errorInput, setErrorInput] = useState<boolean>(true);

  //   const isError = errorInput === true;

  //   const handleInputChange = (e) =>
  //     e.target.value >= 0 && e.target.value <= 200
  //       ? setInput(e.target.value)
  //       : "";

  return (
    <FormControl isInvalid={isError}>
      <Flex
        flexDirection={{ base: "column", md: "row" }}
        as="form"
        alignContent="center"
        alignItems="center"
        justifyContent="space-around"
        w="100%"
        h="50%"
      >
        <FormLabel
          textAlign={{ base: "center", md: "start" }}
          as="strong"
          w={labelWidth}
          minW={labelWidth}
          textColor={colorLabel}
          m="0"
          fontSize={fontSize}
        >
          <Text as="strong">{textLabel}</Text>
        </FormLabel>
        <Input
          borderColor={borderColor}
          min={min}
          max={max}
          variant={variant}
          textAlign="center"
          onChange={onChange}
          maxLength={maxLength}
        />
      </Flex>
      {isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
}
