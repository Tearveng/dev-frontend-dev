import {
  Box,
  Button,
  Center,
  Checkbox,
  FormControl,
  HStack,
  Input,
  Pressable,
  Text,
  useBreakpointValue,
  View,
  VStack,
} from 'native-base';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  faUser,
  faLock,
  faEyeSlash,
  faEye,
  faWarning
} from '@fortawesome/free-solid-svg-icons';
import {
  TextInput, TouchableOpacity, KeyboardAvoidingView, /*, Platform*/
  Platform,
  TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import {style} from '@styles/style';
import {useAppSelector} from "@src/redux/config/hooks";

export interface Props {
  navigation: any;
}

export function LoginScreen({navigation}: Props) {
  const [show, setShow] = React.useState(true);
  const [isSubmit, setIsSubmit] = React.useState(false);
  const [validEmail, setValidEmail] = React.useState(true);
  const [validPassword, setValidPassword] = React.useState(true);
  const [messageEmail, setMessageEmail] = React.useState('');
  const [messagePass, setMessagePass] = React.useState('');

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const flexDir = useBreakpointValue({
    base: 'row',
  });

  const user = useAppSelector(state => state.user);

  const refEmail = React.useRef<TextInput>(null);
  const refPassword = React.useRef<TextInput>(null);

  const login = () => {
    setIsSubmit(true);
    if (validate()) {
      if ((email != user.email) && (password != user.password)) {
        setValidEmail(false);
        setMessageEmail('Adresse email et mot de passe non reconnus, merci de vérifier leur exactitude.');
        refEmail.current?.focus();
      } else if (email != user.email) {
        setValidEmail(false);
        setMessageEmail('Adresse email non reconnue, merci de vérifier leur exactitude.');
        refEmail.current?.focus();
      } else if (password != user.password) {
        setValidPassword(false);
        setMessagePass('Mot de passe non reconnu, merci de vérifier leur exactitude.');
        refPassword.current?.focus();
      } else {
        navigation.navigate('Home');
      }
    }
    setTimeout(() => {
      setIsSubmit(false);
    }, 500);

  }
  const validate = () => {
    let validForm = true;
    if (!email.includes('@')) {
      validForm = false;
      setValidEmail(false);
      setMessageEmail('Valid email must be has \'@\'.');
    } else {
      setValidEmail(true);
      setMessageEmail('');
    }
    if (password.length < 6) {
      validForm = false;
      setValidPassword(false);
      setMessagePass('Must be atleast 6 characters.');
    } else {
      setValidPassword(true);
      setMessagePass('');
    }
    return validForm;
  }

  return (
      <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={style.avoidingView}
      >
        <TouchableWithoutFeedback onPress={Platform.OS !=="web" ? Keyboard.dismiss : ()=>{}}>
          <View style={style.container}>
            <Box
                style={style.card}
                alignSelf="center"
                w={{base: 300, md: 300, sm: 280, lg: 380}}
            >
              <Box style={style.cardHeader}>
                <Center>
                  <Text size={'md'}>{'CUSTOMER LOGIN'}</Text>
                </Center>
              </Box>
              <VStack p={10} pt={5} space={6}>
                <FormControl isInvalid={!validEmail} isRequired={true}>
                  <Input
                      type="text"
                      onChangeText={setEmail}
                      ref={refEmail}
                      variant="underlined"
                      placeholder="Adresse email"
                      leftElement={<FontAwesomeIcon icon={faUser} color="white"/>}
                  />
                  <FormControl.ErrorMessage leftIcon={<FontAwesomeIcon icon={faWarning} color="red"/>}>
                    {messageEmail}
                  </FormControl.ErrorMessage>
                </FormControl>
                <FormControl isInvalid={!validPassword} isRequired>
                  <Input
                      secureTextEntry={show}
                      onChangeText={setPassword}
                      ref={refPassword}
                      variant="underlined"
                      placeholder="Mot de passe"
                      leftElement={
                        <FontAwesomeIcon icon={faLock} color="lightgray"/>
                      }
                      rightElement={
                        <Pressable onPress={() => setShow(!show)}>
                          <FontAwesomeIcon
                              icon={show ? faEyeSlash : faEye}
                              color="lightgray"
                          />
                        </Pressable>
                      }
                  />
                  <FormControl.HelperText display="none">
                    Must be atleast 6 characters.
                  </FormControl.HelperText>
                  <FormControl.ErrorMessage leftIcon={<FontAwesomeIcon icon={faWarning} color="red"/>}>
                    {messagePass}
                  </FormControl.ErrorMessage>
                </FormControl>
                <HStack
                    style={{
                      flexDirection: flexDir,
                    }}
                    space={6}
                    justifyContent="center"
                >
                  <Checkbox bg="transparent" size="sm" value="one">
                    <Text variant={'smallText'}>Remember me</Text>
                  </Checkbox>

                  <TouchableOpacity
                      onPress={() => {
                        navigation.navigate('ForgotPassword',);
                      }}
                  >
                    <Text style={{paddingTop: 0}} italic variant={'smallText'}>
                      Forgot password?
                    </Text>
                  </TouchableOpacity>
                </HStack>
                <Button
                    isLoading={isSubmit}
                    isLoadingText={"Se connectering..."}
                    style={style.button}
                    mx="auto"
                    w={{base: '75%'}}
                    onPress={login}
                >
                  Se connecter
                </Button>
              </VStack>
            </Box>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
  );
}
