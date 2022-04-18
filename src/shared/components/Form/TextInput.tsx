import React from 'react';
import { colors } from 'shared/utils/Styles';
import { StyledInput } from './Styles';

interface InputInterface {
  style?: any;
  name: string;
  type: string;
  error?: null | string;
  placeholder?: string;
  width?: string;
  value?: any;
  onChange: Function;
  children?: React.ReactChild | React.ReactChild[];
}

const TextInput: React.FC<InputInterface> = (props) => {
  const {
    style,
    name,
    type,
    error,
    placeholder,
    width,
    value,
    onChange,
    children,
  } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
        ...style,
      }}>
      <label
        htmlFor={name}
        style={{ color: `${colors.textLight}`, fontSize: '14px' }}>
        {children}
      </label>
      <StyledInput
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        width={width}
        placeholder={placeholder}
      />
      {error !== '' && (
        <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>
      )}
    </div>
  );
};

TextInput.defaultProps = {
  style: {},
  error: null,
  placeholder: 'Placeholder',
  width: '300px',
  value: '',
  children: [],
};

export default TextInput;
