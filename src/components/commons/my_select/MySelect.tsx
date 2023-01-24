import {CheckIcon, Select} from 'native-base';
import React from 'react';
import {MySelectProps} from '.';

export const MySelect = ({select, selectItem}: MySelectProps) => {
  return (
    <Select
      selectedValue={'Hello'}
      minWidth="200"
      accessibilityLabel="Choose Service"
      placeholder="Choose Service"
      _selectedItem={{
        bg: 'teal.600',
        endIcon: <CheckIcon size="5" />,
      }}
      mt={1}
      onValueChange={() => {}}
      {...select}
    >
      {[1, 3, 5, 6].map((i: number) => {
        return (
          <Select.Item
            label={i.toString()}
            value={i.toString()}
            key={i}
            {...selectItem}
          />
        );
      })}
    </Select>
  );
};
