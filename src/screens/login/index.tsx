import {
  Box,
  Center,
  Checkbox,
  HStack,
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
} from '@fortawesome/free-solid-svg-icons';
import {
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {style} from '@styles/style';
import {useFocusEffect} from '@react-navigation/native';
import {login, LoginForm, validate} from '@src/redux/features/user/actions';
import {NavigatorRoute} from '@src/navigation/NavigatorRouteConstant';
import {useAppSelector} from '@src/redux/config/hooks';
import {MyForm} from '@components/commons/my_form';

export interface Props {
  navigation: any;
}

export function LoginScreen({navigation}: Props) {
  const [userForm, setUserForm] = React.useState<LoginForm>({
    email: '',
    password: '',
    isEmailValid: true,
    isPasswordValid: true,
    isSecure: true,
    emailMessage: '',
    passwordMessage: '',
  });
  const user = useAppSelector(state => state.user);
  useFocusEffect(
    React.useCallback(() => {
      setUserForm({
        email: '',
        password: '',
        isEmailValid: true,
        isPasswordValid: true,
        isSecure: true,
        emailMessage: '',
        passwordMessage: '',
      });
    }, []),
  );

  const refEmail = React.useRef<TextInput>(null);
  const refPassword = React.useRef<TextInput>(null);

  const flexDir = useBreakpointValue({
    base: 'row',
  });

  const submit = () => {
    validate(userForm);
    if (userForm.isEmailValid && userForm.isPasswordValid) {
      if (login(userForm, user)) {
        navigation.navigate(NavigatorRoute.HOME);
      } else if (!userForm.isEmailValid) {
        refEmail.current?.focus();
      } else if (!userForm.isPasswordValid) {
        refPassword.current?.focus();
      }
    }
    setTimeout(() => {}, 500);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={style.flex}
    >
      <TouchableWithoutFeedback
        onPress={Platform.OS !== 'web' ? Keyboard.dismiss : () => {}}
      >
        <View style={[style.container, style.flex]}>
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

            <VStack p={10} pt={5}>
              <MyForm
                form={{space: 1}}
                input={[
                  {
                    leftElement: (
                      <FontAwesomeIcon icon={faUser} color="white" />
                    ),
                    variant: 'underlined',
                    name: 'email',
                    color: 'white',
                    isRequired: true,
                    placeholder: 'Your email here...',
                    rules: {
                      required: 'Email is required!',
                      validate: (val: string) => {
                        const pattern =
                          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
                        const result = val.match(pattern);
                        return result ? undefined : 'Email is invalid!';
                      },
                    },
                  },
                  {
                    secureTextEntry: userForm.isSecure,
                    name: 'password',
                    color: 'white',
                    isRequired: true,
                    type: 'password',
                    placeholder: 'Your password here...',
                    variant: 'underlined',
                    // message: 'overwrite of all messages.',
                    // messageType: 'error | success | warning',
                    rules: {
                      required: 'Email is required!',
                      validate: (val: string) => {
                        if (val.length < 6) {
                          return 'Password at least 6 characters.';
                        }
                      },
                    },
                    leftElement: (
                      <FontAwesomeIcon icon={faLock} color="lightgray" />
                    ),
                    rightElement: (
                      <Pressable
                        onPress={() =>
                          setUserForm(prevState => ({
                            ...prevState,
                            isSecure: !userForm.isSecure,
                          }))
                        }
                      >
                        <FontAwesomeIcon
                          icon={userForm.isSecure ? faEyeSlash : faEye}
                          color="lightgray"
                        />
                      </Pressable>
                    ),
                  },
                ]}
                button={{
                  buttons: [
                    {
                      text: 'Se connecter',
                      type: 'submit',
                      colorScheme: 'success',
                      onPress: submit,
                    },
                  ],
                }}
              />

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
                    navigation.navigate('forgot_password');
                  }}
                >
                  <Text style={{paddingTop: 0}} italic variant={'smallText'}>
                    Forgot password?
                  </Text>
                </TouchableOpacity>
              </HStack>
            </VStack>
          </Box>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
