import React from 'react';
import IssueListHeader from '.';

const meta = {
  title: 'Issue List Header',
  component: IssueListHeader,
};

export default meta;

const Template = (args) => {
  return <IssueListHeader {...args} />;
};

export const Primary = Template.bind({});

Primary.args = {};
