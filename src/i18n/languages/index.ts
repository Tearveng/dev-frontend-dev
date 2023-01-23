import en from '@src/i18n/languages/en.json';
import fr from '@src/i18n/languages/fr.json';

type LanguageObjectType = typeof fr;

const Localization: LanguageObjectType = {
  changeLanguage: 'changeLanguage',
  sampleUI: 'sampleUI',
  language: 'language',
  chooseYourPreferLanguage: 'chooseYourPreferLanguage',
  hello: 'hello',
  search: 'search',
  whatDoYouWantToLearnToday: 'whatDoYouWantToLearnToday',
  getStarted: 'getStarted',
  lastSeenCourses: 'lastSeenCourses',
  browseFile: 'browseFile',
};

export {en, fr, Localization};
