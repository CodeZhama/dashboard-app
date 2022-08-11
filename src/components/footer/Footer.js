import React from "react";
import styled from "styled-components";

///
export default function Footer() {
  return (
    <StyleFooter>
      <div className="left">
        <p>© 2021 Themesberg, LLC. All rights reserved.</p>
      </div>
      <div className="right">
        <i className="icon icon-facebook" />
        <i className="icon icon-twitter" />
        <i className="icon icon-github" />
        <i className="icon icon-dribble" />
      </div>
    </StyleFooter>
  );
}

const StyleFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 48px 32px;
  border-radius: 16px;
  margin-top: 16px;
  background-color: var(--light);
  .left {
    & > p {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      color: var(--color-search);
    }
  }

  .right {
    display: flex;
    align-items: center;
    gap: 24px;

    i:hover {
      transform: scale(1.2);
    }
  }
  @media (max-width:520px) {
     flex-direction: column;
     gap: 15px;
     padding: 30px 32px;
  }
  @media (max-width:465px) {
  .left{
    p{
      font-size: 13px;
    }
  }
  }
`;
