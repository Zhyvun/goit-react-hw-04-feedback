import styled from '@emotion/styled';

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${props => props.theme.spacing(15)};
`;

export const ButtonOptions = styled.button`
  width: ${props => props.theme.spacing(47)};
  font-size: ${props => props.theme.spacing(5)};
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.blue};
  outline: none;
  border: ${props => `1px solid ${props.theme.colors.white}`};
  border-radius: ${props => props.theme.spacing(2)};
  padding: ${props => props.theme.spacing(5)};
  cursor: pointer;
  box-shadow: ${props => `0 3px 9px ${props.theme.colors.black}`};
  transition: background-color 250ms ease, color 250ms ease,
    border-color 250ms ease;

  &:hover,
  &:focus {
    border-color: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.blue};
    background-color: ${props => props.theme.colors.gray};
  }
`;
