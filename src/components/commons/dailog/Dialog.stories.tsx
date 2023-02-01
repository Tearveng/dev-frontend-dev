import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Dialog} from './';

export default {
  title: 'Commons/Dialog',
  component: Dialog,
} as ComponentMeta<typeof Dialog>;

const Template: ComponentStory<typeof Dialog> = args => <Dialog {...args} />;
export const DialogSample = Template.bind({});
DialogSample.args = {};
