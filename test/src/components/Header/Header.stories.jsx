import React from 'react';
import Header from '.';

const meta = {
  title: 'Header',
  component: Header,
  argTypes: {
    userImgSrc: { control: 'text' },
    userName: { control: 'text' },
  },
};

export default meta;

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  userImgSrc: '../../assets/defaultLogo.svg',
  userName: 'frog',
};

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
