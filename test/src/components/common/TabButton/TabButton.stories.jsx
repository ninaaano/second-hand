import React from 'react';
import TabButton from '.';

const meta = {
  title: 'Tab Button',
  component: TabButton,
};

export default meta;

const Template = (args) => {
  return <TabButton {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  labelCount: 0,
  milestoneCount: 0,
};
