import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';

import { $TextInput, $Label, $Input } from './style';

// ! 추후에 prop에 helpText, iconName 추가
const TextInput = ({ id, value, onChange, labelText = '', placeholderText = '', disabled = false }) => {
  const [isFocused, setIsFocused] = useState(false);

  const focusHandler = () => setIsFocused(true);
  const blurHandler = () => setIsFocused(false);

  const hasValue = value.trim().length > 0;

  const styleType = useMemo(() => {
    if (labelText && placeholderText) return 'both';
    if (labelText && !placeholderText) return 'onlyLabel';
    if (!labelText && placeholderText) return 'onlyPlaceholder';

    return null;
  }, [labelText, placeholderText]);

  return (
    <React.Fragment>
      <$TextInput styleType={styleType} isFocused={isFocused} disabled={disabled}>
        {labelText && (
          <$Label htmlFor={id} styleType={styleType} hasValue={hasValue} isFocused={isFocused}>
            {labelText}
          </$Label>
        )}
        <$Input
          type="text"
          id={id}
          name={id}
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
          hasValue={hasValue}
          isFocused={isFocused}
          onFocus={focusHandler}
          onBlur={blurHandler}
          disabled={disabled}
        />
      </$TextInput>
      {/* {helpText && <div>{helpText}</div>} */}
    </React.Fragment>
  );
};

TextInput.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  placeholderText: PropTypes.string,
  disabled: PropTypes.bool,
  // helpText: PropTypes.string,
};

export default TextInput;
