import { NavigatorRoute } from "./NavigatorRouteConstant";


const config = {
  screens: {
    [NavigatorRoute.DIALOG_SCREEN]: NavigatorRoute.DIALOG_SCREEN,
    [NavigatorRoute.HOME]: NavigatorRoute.HOME,
    [NavigatorRoute.FILE_PICKER]: NavigatorRoute.FILE_PICKER,
    [NavigatorRoute.FORGOT_PASSWORD]: NavigatorRoute.FORGOT_PASSWORD,
    [NavigatorRoute.PAGINATION_SCREEN]: NavigatorRoute.PAGINATION_SCREEN,
    [NavigatorRoute.SAMPLE_UI.MAIN]: {
      initialRouteName: NavigatorRoute.SAMPLE_UI.LANDING,
      screens:{
        [NavigatorRoute.SAMPLE_UI.LANDING]: NavigatorRoute.SAMPLE_UI.LANDING,
        [NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL]: NavigatorRoute.SAMPLE_UI.SAMPLE_DETAIL
      }
    },
  },
};

export const linking= {
  prefixes: ['http://localhost:3000'],
  config,
};