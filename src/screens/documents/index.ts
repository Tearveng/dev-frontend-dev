import {DocumentInProgressScreen} from './DocumentInProgressScreen';
import {SessionScreen} from './SessionScreen';
import {UploadToBeSignedScreen} from './UploadToBeSignedScreen';

import {ILinearGradientProps} from 'native-base/lib/typescript/components/primitives/Box/types';
import {
  ResponsiveValue,
  ColorType,
} from 'native-base/lib/typescript/components/types';

type BackGroundColor = ResponsiveValue<
ColorType | string | ILinearGradientProps
>
export {
  DocumentInProgressScreen,
  SessionScreen,
  UploadToBeSignedScreen,
  BackGroundColor
};
