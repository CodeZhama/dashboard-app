import React from "react";
import styled, { css } from "styled-components";
export default function SettingsButton({ ...props }) {
  return (
    <StyleSettingsButton {...props}>
      <li className="functions__li">
        <i className="icon icon-docs" />
        <p>Docs</p>
      </li>
      <li className="functions__li">
        <i className="icon icon-components" />
        <p>Components</p>
      </li>
      <li className="functions__li">
        <i className="icon icon-help" />
        <p>Help</p>
      </li>
    </StyleSettingsButton>
  );
}

const StyleSettingsButton = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 16px 13px;
  margin-top: 24px;
  .functions__li {
    display: flex;
    align-items: center;
    gap: 16px;
    cursor: pointer;
    &:hover {
    color: var(--light-green);
    i {
      background-color: var(--light-green);
    }
  }
  }

  ${({ menuBar }) =>
    menuBar &&
    css`
      margin-top: 20px;
      padding-top: 25px;
      padding-left: 20px;
      border-top: 1px solid #e5e7eb;
    `}
  
`;
