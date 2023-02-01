import {Radio, View} from 'native-base';
import React from 'react';
import {MyRadioButtonProps} from '.';
import {MyText} from '../my_text';

export const MyRadioButton = ({
  RadioProps,
  RadioGroupProps,
  onChange,
  data,
  defaultValue,
}: MyRadioButtonProps) => {
  const selected = data.filter(i => i.isSelected === true)[0];
  const selectedValue = selected ? selected.value : undefined;
  const [value, setValue] = React.useState(
    selectedValue ?? defaultValue ?? data[0].value,
  );
  return (
    <Radio.Group
      name="myRadioGroup"
      accessibilityLabel="favorite number"
      value={value}
      {...RadioGroupProps}
      onChange={nextValue => {
        setValue(nextValue);
        data.forEach(i => {
          if (i.value === nextValue) {
            i.isSelected = true;
          } else {
            i.isSelected = false;
          }
        });
        onChange && onChange(nextValue, data);
      }}
    >
      <View display={'flex'} flexDir="row" alignItems={'center'}>
        {data.length > 0 &&
          data.map((item, index) => (
            <View key={index} px={2}>
              <Radio
                // colorScheme={'black'}
                value={item.value}
                my="2"
                {...RadioProps}
              >
                <MyText type="dark">{item.text}</MyText>
              </Radio>
            </View>
          ))}
      </View>
    </Radio.Group>
  );
};
