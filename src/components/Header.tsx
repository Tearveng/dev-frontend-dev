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
import {LanguagePicker} from './langauge_picker';
import {NavigatorRoute} from '@src/navigation';

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
          <Pressable
            onPress={() => {
              navigation.navigate(NavigatorRoute.HOME);
            }}
          >
            <Text color="white" fontSize="20" fontWeight="bold">
              Home
            </Text>
          </Pressable>
        </HStack>
        <HStack space={2}>
          {isNavItem ? (
            <>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.HOME);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  DOCUMENT
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.HOME);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  CONTACT
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.SLIDE_SCREEN);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  SLIDE
                </Text>
              </Pressable>
            </>
          ) : (
            <></>
          )}
          <IconButton
            onPress={() => {
              navigation.navigate(NavigatorRoute.LOGIN);
            }}
            icon={<FontAwesomeIcon icon={faUser} color="white" />}
            name="menu"
          />
          <LanguagePicker />
        </HStack>
      </HStack>
    </>
  );
}
