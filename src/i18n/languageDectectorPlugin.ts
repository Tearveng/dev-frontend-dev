import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import {
  LanguagesLocalization,
  DefaultLanguagesLocalization,
} from '@src/i18n/localization';

const STORE_LANGUAGE_KEY = 'user-language';
const LANG_CODES: string[] = Object.values(LanguagesLocalization) as string[];

const languageDetectorPlugin = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: async function (callback: (lang: string) => void) {
    try {
      await AsyncStorage.getItem(STORE_LANGUAGE_KEY).then(language => {
        if (language) {
          const findBestAvailableLanguage =
            RNLocalize.findBestAvailableLanguage(LANG_CODES);
          callback(
            findBestAvailableLanguage?.languageTag ||
              DefaultLanguagesLocalization,
          );
          return;
        } else {
          return callback(DefaultLanguagesLocalization);
        }
      });
    } catch (error) {
      console.log('Error reading language', error);
    }
  },
  cacheUserLanguage: async function (language: string) {
    try {
      await AsyncStorage.setItem(STORE_LANGUAGE_KEY, language);
    } catch (error) {}
  },
};

module.exports = {languageDetectorPlugin};
