import {ISelectItemProps, ISelectProps} from 'native-base';

export interface MySelectProps {
  select?: MySelectProp | undefined;
  selectItem?: MySelectItemProp | undefined;
}

interface MySelectProp extends ISelectProps {}
interface MySelectItemProp extends ISelectItemProps {}
