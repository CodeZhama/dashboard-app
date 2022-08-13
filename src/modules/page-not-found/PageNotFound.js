import React from "react";
import styled from "styled-components";
//
import Logo from "../../assets/icons/logo.svg";
import Img from "../../assets/image/404.png";
///
export default function PageNotFound() {
  return (
    <StylePageNotFound>
      <div className="pagent__navbar">
        <div className="left">
          <div className="menu__bar">
            <i className="icon icon-menu-bar" />
          </div>
          <div className="logo__img">
            <img src={Logo} alt="logo" />
          </div>

          <ul>
            <li>Dashboard</li>
            <li>Team</li>
            <li>Projects</li>
            <li>Calendar </li>
          </ul>
        </div>

        <div className="right">
          <i className="icon icon-logout" />
          <p>Login/Register </p>
        </div>
      </div>

      <StyleContent>
        <div className="image">
          <img src={Img} alt="img" />
        </div>

        <div className="text">
          <h1>Page not found</h1>
          <p>
            Oops! Looks like you followed a bad link. If you think this is a
            problem with us, please tell us.
          </p>
          <div className="go__back">
            <button className="btn">Go back home</button>
          </div>
        </div>
      </StyleContent>
    </StylePageNotFound>
  );
}

const StylePageNotFound = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #f9fafb;
  .pagent__navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    background-color: var(--light);
    border-bottom: 1px solid var(--border-color);

    .left {
      display: flex;
      align-items: center;
      gap: 32px;
      .menu__bar {
        display: none;
      }
      ul {
        display: flex;
        align-self: center;
        gap: 16px;
        li {
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          line-height: 21px;
          letter-spacing: 0em;

          &:hover {
            color: #0e9f6e;
          }
        }
      }
    }

    .right {
      display: flex;
      align-items: center;
      gap: 9px;
      cursor: pointer;
      p {
        font-size: 14px;
        font-weight: 500;
        line-height: 21px;
        letter-spacing: 0em;
      }
    }
  }
  @media (max-width: 1024px) {
    .pagent__navbar {
      .left {
        .menu__bar {
          display: block;
        }
        .logo__img {
          display: none;
        }
        ul {
          display: none;
        }
      }
    }
  }
`;

const StyleContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  .image {
    width: 580px;
    img {
      width: 100%;
    }
  }

  .text {
    text-align: center;
    & > h1 {
      font-size: 48px;
      font-weight: 700;
      line-height: 62px;
      letter-spacing: 0em;
      margin-bottom: 9px;
    }
    & > p {
      font-size: 16px;
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0em;
      color: #6b7280;
      margin-bottom: 22px;
    }
    .go__back {
      .btn {
        padding: 9px 17px;
        font-size: 14px;
        font-weight: 600;
        line-height: 21px;
        letter-spacing: 0em;
        background-color: #0e9f6e;
        border-radius: 12px;
        color: var(--light);
        border: none;
        cursor: pointer;
      }
    }
  }
  @media (max-width: 576px) {
    .image {
      margin-top: 84px;
      width: 400px;
    }
    .text {
      margin-top: 84px;
      h1 {
        font-size: 30px;
        font-weight: 700;
        line-height: 45px;
        letter-spacing: 0em;
      }
      p {
        max-width: 328px;
      }
    }
  }
  @media (max-width: 400px) {
    .image {
      width: 340px;
    }
    .text {
      p {
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        letter-spacing: 0em;
      }
    }
  }
`;
