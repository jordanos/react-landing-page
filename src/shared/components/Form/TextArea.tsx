import React from 'react';
import { colors } from 'shared/utils/Styles';
import { StyledArea } from './Styles';

interface Props {
  name: string;

  error?: null | string;
  placeholder?: string;
  width?: string;
  value?: string;
  onChange: Function;
  children?: React.ReactChild | React.ReactChild[];
}

const TextArea: React.FC<Props> = (props) => {
  const { name, error, placeholder, value, onChange, width, children } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100%',
      }}>
      <label
        htmlFor={name}
        style={{ color: `${colors.textLight}`, fontSize: '14px' }}>
        {children}
      </label>
      <StyledArea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        placeholder={placeholder}
        rows={20}
        width={width}
      />
      {error && <div style={{ color: 'red', fontSize: '12px' }}>{error}</div>}
    </div>
  );
};

TextArea.defaultProps = {
  width: '100%',
  error: null,
  placeholder: 'Placeholder',
  value: '',
  children: [],
};

export default TextArea;
