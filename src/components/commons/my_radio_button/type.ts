import {IRadioGroupProps, IRadioProps, IRadioValue} from 'native-base';

export interface MyRadioButtonProps {
  RadioProps?: MyRadioProps;
  RadioGroupProps?: MyRadioGroupProps;
  onChange?: ((value: IRadioValue, data: IRadioData[]) => void) | null; //IRadioGroupOnChangeHandler;
  data: IRadioData[];
  defaultValue?: string;
}

export interface IRadioData {
  text: string;
  value: string;
  isSelected?: boolean;
}
type MyRadioProps = IRadioProps;
type MyRadioGroupProps = IRadioGroupProps;
