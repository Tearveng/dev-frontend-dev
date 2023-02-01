import {ISelectItemProps, ISelectProps} from 'native-base';
import {IViewProps} from 'native-base/lib/typescript/components/basic/View/types';

export interface MySelectProps {
  defaultSelect?: string | undefined;
  select?: MySelectProp | undefined;
  selectItem?: MySelectItemProp | undefined;
  _webContainer?: Partial<IViewProps> | undefined;
  data: any[];
  valueProp?: string | undefined;
  labelProp?: string | undefined;
  onValueChange?: ((itemValue: string) => void) | undefined;
}

type MySelectProp = ISelectProps;
type MySelectItemProp = ISelectItemProps;
