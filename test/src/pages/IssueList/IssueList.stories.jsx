import React from 'react';
import IssueList from '.';

const meta = {
  title: 'Issue List View',
  component: IssueList,
};

export default meta;

const Template = (args) => {
  return <IssueList {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {};
