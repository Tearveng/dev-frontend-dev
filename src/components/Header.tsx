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
import {useTranslation} from 'react-i18next';
import {Localization} from '@src/i18n/languages';

export function Header({navigation}: any) {
  const {t} = useTranslation();
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
              {t(Localization('home'))}
            </Text>
          </Pressable>
        </HStack>
        <HStack space={2}>
          {isNavItem ? (
            <>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.PAGINATION_SCREEN);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('paginationScreen'))}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.DIALOG_SCREEN);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('dialogScreen'))}
                </Text>
              </Pressable>

              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.SLIDE_SCREEN);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('slideScreen'))}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.TEST_COMPONENT);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('testComponents'))}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.SAMPLE_UI.MAIN);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('sampleUILandingScreen'))}
                </Text>
              </Pressable>
              <Pressable
                onPress={() => {
                  navigation.navigate(NavigatorRoute.TEST_API);
                }}
              >
                <Text bold={true} paddingTop={2}>
                  {t(Localization('testAPIServerRequestScreen'))}
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
