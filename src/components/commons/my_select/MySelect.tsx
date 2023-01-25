import {CheckIcon, Select, View} from 'native-base';
import React, {useState} from 'react';
import {MySelectProps} from '.';

export const MySelect = ({
  data,
  valueProp,
  labelProp,
  select,
  selectItem,
  onValueChange,
  _webContainer,
}: MySelectProps) => {
  const [selectedValue, setSelectedValue] = useState('');
  return (
    <View
      _web={{
        width: '100%',
        ..._webContainer,
      }}
    >
      <Select
        selectedValue={selectedValue}
        borderWidth={0}
        color="black"
        backgroundColor={'white'}
        minWidth="200"
        accessibilityLabel="Choose Service"
        placeholder="Choose Service"
        _selectedItem={{
          bgColor: 'muted.200',
          endIcon: <CheckIcon size="5" />,
          borderRadius: 'md',
        }}
        mt={1}
        {...select}
        onValueChange={itemValue => {
          setSelectedValue(itemValue);
          onValueChange && onValueChange(itemValue);
        }}
      >
        {data.length > 0 &&
          data.map(i => {
            return (
              <Select.Item
                label={i[labelProp ?? 'label']}
                value={i[valueProp ?? 'value']}
                key={i[valueProp ?? 'value']}
                {...selectItem}
              />
            );
          })}
      </Select>
    </View>
  );
};
