import {ColorType} from 'native-base/lib/typescript/components/types';
import {LoadingButtonProps} from '../loading_btn';
import {MyTextProps} from '../my_text';
import {Slide} from './hooks/useSlide';
interface SlideContent {
  stepName: string;
  child: JSX.Element;
}
export interface SlideProps {
  slideContent: SlideContent[];
  width?: number | string | undefined;
  height?: number | string | undefined;
  backgroundColor?: ColorType | undefined;
  headerStyle?: MyTextProps;
  button?: Button | undefined;
  onDone?: ((slide?: Slide) => void) | undefined;
  onNext?: ((slide?: Slide) => void) | undefined;
  onBack?: ((slide?: Slide) => void) | undefined;
}

interface Button {
  leftButton?: LoadingButtonProps;
  rightButton?: LoadingButtonProps;
  lastStepButton?: LoadingButtonProps;
}
