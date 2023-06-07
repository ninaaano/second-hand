import React from 'react';
import DropDown from '.';

const meta = {
  title: 'Drop Down',
  component: DropDown,
};

export default meta;

const Template = (args) => {
  return <DropDown {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {
  type: '이슈',

  menus: [
    {
      id: 1,
      imgSrc: 'https://avatars.githubusercontent.com/u/56246060?v=4',
      text: '열린 이슈',
      isChecked: true,
    },
    {
      id: 2,
      text: '내가 작성한 이슈',
      isChecked: true,
    },
    {
      id: 3,
      text: '나에게 할당된 이슈',
      isChecked: false,
    },
    {
      id: 4,
      text: '내가 댓글을 남긴 이슈',
      isChecked: false,
    },
    {
      id: 5,
      text: '닫힌 이슈',
      isChecked: false,
    },
  ],
};
