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
    TouchableOpacity, KeyboardAvoidingView, /*, Platform*/
    Platform, TextInput,
    TouchableWithoutFeedback, Keyboard,
} from 'react-native';
import {style} from '@styles/style';
import {useAppSelector} from "@src/redux/config/hooks";
import {useFocusEffect} from "@react-navigation/native";

export interface Props {
    navigation: any;
}

export function LoginScreen({navigation}: Props) {
    const [isSubmit, setIsSubmit] = React.useState(false);
    const [userForm, setUserForm] = React.useState({
        email: '',
        password: '',
        isEmailValid: true,
        isPasswordValid: true,
        isSecure: true,
        emailMessage: '',
        passwordMessage: ''
    });

    useFocusEffect(
        React.useCallback(() => {
            setUserForm({
                email: '',
                password: '',
                isEmailValid: true,
                isPasswordValid: true,
                isSecure: true,
                emailMessage: '',
                passwordMessage: ''
            });
        }, [])
    );

    const user = useAppSelector(state => state.user);

    const refEmail = React.useRef<TextInput>(null);
    const refPassword = React.useRef<TextInput>(null);

    const flexDir = useBreakpointValue({
        base: 'row',
    });

    const login = () => {
        setIsSubmit(true);
        navigation.navigate('home');
        if (validate()) {
            if ((userForm.email != user.email) && (userForm.password != user.password)) {
                setUserForm(prevState => ({
                    ...prevState,
                    isEmailValid: false,
                    emailMessage: 'Adresse email et mot de passe non reconnus, merci de vérifier leur exactitude.'
                }));
                refEmail.current?.focus();
            } else if (userForm.email != user.email) {
                setUserForm(prevState => ({
                    ...prevState,
                    isEmailValid: false,
                    emailMessage: 'Adresse email non reconnue, merci de vérifier leur exactitude.'
                }));
                refEmail.current?.focus();
            } else if (userForm.password != user.password) {
                setUserForm(prevState => ({
                    ...prevState,
                    isPasswordValid: false,
                    passwordMessage: 'Mot de passe non reconnu, merci de vérifier leur exactitude.'
                }));
                refPassword.current?.focus();
            } else {
                navigation.navigate('home');
            }
        }
        setTimeout(() => {
            setIsSubmit(false);
        }, 500);
    }
    const validate = () => {
        let validForm = true;
        if (!userForm.email.includes('@')) {
            validForm = false;
            setUserForm(prevState => ({
                ...prevState,
                isEmailValid: false,
                emailMessage: 'Valid email must be has \'@\'.',
            }));
        } else {
            setUserForm(prevState => ({
                ...prevState,
                isEmailValid: false,
                emailMessage: '',
            }));
        }
        if (userForm.password.length < 6) {
            validForm = false;
            setUserForm(prevState => ({
                ...prevState,
                isPasswordValid: false,
                passwordMessage: 'Must be atleast 6 characters.',
            }));
        } else {
            setUserForm(prevState => ({
                ...prevState,
                isPasswordValid: true,
                passwordMessage: '',
            }));
        }
        return validForm;
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={style.flex}
        >
            <TouchableWithoutFeedback onPress={Platform.OS !== "web" ? Keyboard.dismiss : () => {
            }}>
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
                            <VStack p={10} pt={5} space={6}>
                                <FormControl isInvalid={!userForm.isEmailValid} isRequired={true}>
                                    <Input
                                        value={userForm.email}
                                        type="text"
                                        onChangeText={e => setUserForm(prevState => ({
                                            ...prevState,
                                            email: e
                                        }))}
                                        ref={refEmail}
                                        variant="underlined"
                                        placeholder="Adresse email"
                                        leftElement={<FontAwesomeIcon icon={faUser} color="white"/>}
                                    />
                                    <FormControl.ErrorMessage
                                        leftIcon={<FontAwesomeIcon icon={faWarning} color="red"/>}>
                                        {userForm.emailMessage}
                                    </FormControl.ErrorMessage>
                                </FormControl>
                                <FormControl isInvalid={!userForm.isPasswordValid}>
                                    <Input
                                        value={userForm.password}
                                        secureTextEntry={userForm.isSecure}
                                        onChangeText={e => setUserForm(prevState => ({
                                            ...prevState,
                                            password: e
                                        }))}
                                        ref={refPassword}
                                        variant="underlined"
                                        placeholder="Mot de passe"
                                        leftElement={
                                            <FontAwesomeIcon icon={faLock} color="lightgray"/>
                                        }
                                        rightElement={
                                            <Pressable onPress={() => setUserForm(prevState => ({
                                                ...prevState,
                                                isSecure: !userForm.isSecure
                                            }))}>
                                                <FontAwesomeIcon
                                                    icon={userForm.isSecure ? faEyeSlash : faEye}
                                                    color="lightgray"
                                                />
                                            </Pressable>
                                        }
                                    />
                                    <FormControl.HelperText display="none">
                                        Must be atleast 6 characters.
                                    </FormControl.HelperText>
                                    <FormControl.ErrorMessage
                                        leftIcon={<FontAwesomeIcon icon={faWarning} color="red"/>}>
                                        {userForm.passwordMessage}
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
                                            navigation.navigate('forgot_password',);
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
