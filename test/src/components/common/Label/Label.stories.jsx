import React from 'react';
import Label from '.';

const meta = {
  title: 'Label',
  component: Label,
};

export default meta;

const Template = (args) => {
  return <Label {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  height: 24,
  name: '🌈 feat',
  textColor: 'light',
  backgroundColor: '#0025E6',
};
