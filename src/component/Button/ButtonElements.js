import styled from "styled-components";

export const Btn = styled.button`
  background-color: ${(props)=> props.variant === 'primary' ? '#fff' : 'transparent'};
  padding: 1rem 1.5rem;
  color: ${(props)=> props.variant === 'primary' ? 'teal' : '#fff'};
  border: 2px ${(props)=> props.variant === 'primary' ? 'teal' : '#fff'} solid;
  border-radius: 5rem;
  cursor: pointer;
  transition: 0.5s all;
  margin-top: 2rem;
  &:hover {
    background-color: ${(props)=> props.variant !== 'primary' ? 'transparent' : '#fff'};
  padding: 1rem 1.5rem;
  color: ${(props)=> props.variant !== 'primary' ? 'teal' : '#fff'};
  border: 2px ${(props)=> props.variant === 'primary' ? '#fff' : 'teal'} solid;
  }
`