import React from 'react';
import IssueListMainHeader from '.';

const meta = {
  title: 'Issue List Main Header',
  component: IssueListMainHeader,
};

export default meta;

const Template = (args) => <IssueListMainHeader {...args} />;

export const Primary = Template.bind({});

Primary.args = {};
