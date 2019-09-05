import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
}

export const Button = ({ title }: Props) => {
  return <ButtonStyled>{title}</ButtonStyled>;
};

const ButtonStyled = styled.button`
  background-color: red;
`;
