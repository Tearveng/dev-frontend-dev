import {NavigatorRoute} from './NavigatorRouteConstant';

const config = {
  screens: {
    [NavigatorRoute.DIALOG_SCREEN]: NavigatorRoute.DIALOG_SCREEN,
    [NavigatorRoute.HOME]: NavigatorRoute.HOME,
    [NavigatorRoute.FILE_PICKER]: NavigatorRoute.FILE_PICKER,
    [NavigatorRoute.FORGOT_PASSWORD]: NavigatorRoute.FORGOT_PASSWORD,
    [NavigatorRoute.PAGINATION_SCREEN]: NavigatorRoute.PAGINATION_SCREEN,
    [NavigatorRoute.SLIDE_SCREEN]: NavigatorRoute.SLIDE_SCREEN,
    [NavigatorRoute.TEST_COMPONENT]: NavigatorRoute.TEST_COMPONENT,
    [NavigatorRoute.TEST_API]: NavigatorRoute.TEST_API,
    [NavigatorRoute.SAMPLE_UI.MAIN]: {
      initialRouteName: NavigatorRoute.SAMPLE_UI.LANDING,
      screens: {
        [NavigatorRoute.SAMPLE_UI.LANDING]: NavigatorRoute.SAMPLE_UI.LANDING,
        [NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL]:
          NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL,
      },
    },
    [NavigatorRoute.UPLOAD_SCREEN]: NavigatorRoute.UPLOAD_SCREEN,
  },
};

export const linking = {
  prefixes: ['http://localhost:3000'],
  config,
};
