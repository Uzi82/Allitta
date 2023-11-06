import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
`;

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: ${({ checked }) => checked ? '#5D20D6' : '#D9D9D9'};
  border-radius: 3px;
  transition: background-color 0.2s;
  border-radius: 3px;
`;
const Text = styled.div`
    text-transform: Capitalize;
    font-family: Inter-bold;
    font-size: 14px;
`;

interface CustomCheckboxProps {
    checked: boolean
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    children: React.ReactNode | string
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ checked, onChange, children }) => {

    return (
        <CheckboxContainer>
            <HiddenCheckbox checked={checked} onChange={onChange} />
            <StyledCheckbox checked={checked} />
            <Text>{children}</Text>
        </CheckboxContainer>
    );
};

export default CustomCheckbox;