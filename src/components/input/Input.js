import React from "react";
import styled from "styled-components";

//

export default function Input({ ...props }) {
  return <StyleInput {...props} placeholder="Search" />;
}

const StyleInput = styled.input`
  width: 100%;
  border: none;
  background-color: #f9fafb;
  color: var(--color-search);
  &:focus {
    outline: none;
  }

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0em;
  }
`;
