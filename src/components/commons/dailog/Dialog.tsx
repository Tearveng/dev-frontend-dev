import {Button, Modal, ScrollView, View} from 'native-base';
import React from 'react';
import {DialogProps} from '.';

export const Dialog = ({body, header, size, isOpen, onClose}: DialogProps) => {
  //   const dialog = useDialog();
  console.log(isOpen);
  return (
    <View>
      <Modal isOpen={isOpen} onClose={onClose} size={size}>
        <Modal.Content maxH="212">
          <Modal.CloseButton />
          <Modal.Header>{header}</Modal.Header>
          <Modal.Body>
            <ScrollView nestedScrollEnabled={true}>{body}</ScrollView>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  onClose && onClose();
                }}
              >
                Cancel
              </Button>
              <Button
                onPress={() => {
                  onClose && onClose();
                }}
              >
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </View>
  );
};
