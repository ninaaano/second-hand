import React, { useState } from 'react';
import Input from '.';

const meta = {
  title: 'TextInput',
  component: Input,
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
      <Input id="textarea" value={text} onChange={changeHandler} labelText="label" />
    </form>
  );
};

export const Primary = Template.bind({});

Primary.args = {};
