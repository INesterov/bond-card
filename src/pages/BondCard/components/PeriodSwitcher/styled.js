import styled from 'styled-components'

export const Wrap = styled.div`
  margin-top: 12px;
  margin-right: 12px;
`

export const Button = styled.button`
  background: ${({ isActive }) => (isActive ? '#e6e6e6' : 'transparent')};
  outline: none;
  border: 1px solid #cbcbcb;
  padding: 6px;
  cursor: pointer;
  margin-right: -1px;

  &:first-child {
    border-radius: 5px 0 0 5px;
  }

  &:last-child {
    border-radius: 0 5px 5px 0;
  }

  &:hover {
    background: #e6e6e6;
  }
`
