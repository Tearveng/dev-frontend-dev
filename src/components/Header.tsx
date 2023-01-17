import React from 'react';
import {
  Box,
  HStack,
  IconButton,
  Pressable,
  StatusBar,
  Text,
  useBreakpointValue,
} from 'native-base';
import {faUser, faBars} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {style} from '@styles/style';

// interface Props {
//   navigation: StackNavigationProp<ParamListBase, string, undefined>;
// }

export function Header({navigation}: any) {
  const isNavItem = useBreakpointValue({
    base: false,
    sm: false,
    md: true,
    lg: true,
  });
  return (
    <>
      <StatusBar backgroundColor="#191970" barStyle="light-content" />
      <Box safeAreaTop bg="violet.600" />
      <HStack style={style.appBar} justifyContent="space-between">
        <HStack alignItems="center">
          {!isNavItem ? (
            <IconButton
              onPress={() => {
                navigation.openDrawer();
              }}
              icon={<FontAwesomeIcon icon={faBars} color="white" />}
              name="menu"
            />
          ) : (
            <></>
          )}
          <Text color="white" fontSize="20" fontWeight="bold">
            Home
          </Text>
        </HStack>
        <HStack space={2}>
          {isNavItem ? (
            <>
              <Pressable
                onPress={() => {
                  navigation.navigate('forgot_password');
                }}
              >
                <Text bold={true} paddingTop={2}>
                  DOCUMENT
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate('forgot_password');
                }}
              >
                <Text bold={true} paddingTop={2}>
                  CONTACT
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  navigation.navigate('forgot_password');
                }}
              >
                <Text bold={true} paddingTop={2}>
                  ABOUT
                </Text>
              </Pressable>
            </>
          ) : (
            <></>
          )}
          <IconButton
            onPress={() => {
              navigation.navigate('login');
            }}
            icon={<FontAwesomeIcon icon={faUser} color="white" />}
            name="menu"
          />
        </HStack>
      </HStack>
    </>
  );
}
