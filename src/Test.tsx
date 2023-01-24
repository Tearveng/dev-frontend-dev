import {
  Button,
  CheckIcon,
  FormControl,
  HStack,
  Input,
  Modal,
  Select,
  Text,
} from 'native-base';
import React from 'react';

const Modal_scenario = () => {
  const [service, setService] = React.useState('');
  const [_, setClose] = React.useState(false);

  return (
    <>
      <Modal isOpen={true} h={'90%'} onClose={() => false}>
        <Modal.Content w={'100%'} _web={{w: '100%'}}>
          <Modal.CloseButton onPress={() => false} />
          <Modal.Header w={'100%'} bg={'blue.300'}>
            Add Scenario to session
          </Modal.Header>
          <Modal.Body bg={'blue.900'}>
            <FormControl py={2} minWidth="200">
              <Text>Process</Text>
              <Input value="cosign" />
            </FormControl>
            <Select
              selectedValue={service}
              minWidth="200"
              accessibilityLabel="Choose Service"
              placeholder="Choose Service"
              _selectedItem={{
                bg: 'teal.600',
                endIcon: <CheckIcon size="5" />,
              }}
              mt={1}
              onValueChange={itemValue => setService(itemValue)}
            >
              {[2, 3, 5].map((i: number) => {
                return (
                  <Select.Item
                    label={i.toString()}
                    value={i.toString()}
                    key={i}
                  />
                );
              })}
            </Select>
          </Modal.Body>
          <Modal.Footer>
            <HStack
              justifyContent={'space-around'}
              w={'100%'}
              alignItems={'center'}
            >
              <Button
                onPress={() => {
                  setClose(true);
                }}
              >
                Show scenario
              </Button>
              <Button onPress={() => {}}>Add SCENARIO</Button>
            </HStack>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default Modal_scenario;
