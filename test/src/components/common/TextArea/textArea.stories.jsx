import React, { useState } from 'react';
import TextArea from '.';

const meta = {
  title: 'TextArea',
  component: TextArea,
};

export default meta;

const Template = (args) => {
  const [text, setText] = useState('');

  const changeHandler = ({ target }) => {
    setText(target.value);
    console.log(target.value);
  };

  return (
    <form action="">
      <TextArea id="textarea" value={text} onChange={changeHandler} size="S" />
    </form>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
