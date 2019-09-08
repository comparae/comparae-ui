import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';

type Color = 'primary' | 'secondary' | 'error';
type Size = 'small' | 'medium' | 'large';

interface Props {
  /**
   * Set this to change the color
   */
  color: Color;

  /**
   * Disables the button, changing the visual style and make it unable to be pressed
   * @default false
   */
  disabled?: boolean;

  /**
   * The size of the button
   * @default medium
   */
  size?: Size;

  /**
   * The type of the button
   * @default button
   */
  type?: 'submit' | 'button';

  /**
   * Loading state when waiting for an action to complete
   * @default false
   */
  loading?: boolean;

  /** Function to handle button click */
  onClick?(e: React.MouseEvent<HTMLElement>): void;
}

interface StyledProps {
  color: Color;
  size: Size;
  loading?: boolean;
  disabled: boolean;
}

export const Button: React.SFC<Props> = ({
  children,
  disabled = false,
  type = 'button',
  loading = undefined,
  onClick,
  color,
  size = 'medium',
}) => (
  <ButtonStyled
    disabled={disabled}
    type={type}
    onClick={onClick}
    color={color}
    size={size}
    loading={loading}
    data-testid="button"
  >
    {children}
  </ButtonStyled>
);

const ButtonStyled = styled.button<StyledProps>`
  background-color: ${(props) => props.theme.primary};
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.primary};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: bold;
  height: 40px;
  margin: 0;
  min-width: 140px;
  padding: 0 16px;
  position: relative;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: border-color 300ms ease, background-color 300ms ease,
    color 300ms ease;
  overflow: hidden;

  &:hover {
    background-color: ${(props) => darken(0.05, props.theme.primary)};
    border-color: ${(props) => darken(0.05, props.theme.primary)};
  }

  &:focus {
    background-color: ${(props) => props.theme.primary};
    border-color: ${(props) => darken(0.1, props.theme.primary)};
  }

  &:active {
    background-color: ${(props) => darken(0.1, props.theme.primary)};
    border-color: ${(props) => darken(0.1, props.theme.primary)};
  }

  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: block;
    width: 0;
    padding-top: 0;
    border-radius: 100%;
    opacity: 0.2;
    background-color: ${(props) => darken(0.1, props.theme.primary)};
    transform: translate(-50%, -50%);
  }

  &:focus:before,
  &:active:before {
    width: 120%;
    padding-top: 120%;
    transition: width 0.4s ease-out, padding-top 0.4s ease-out;
  }
`;
