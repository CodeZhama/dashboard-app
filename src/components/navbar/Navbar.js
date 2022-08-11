import React from "react";
import styled from "styled-components";

//
import Input from "../input";
import Logo from "../../assets/icons/logo.svg";
import Avatar from "../../assets/image/Avatar.png";
//
export default function Navbar() {
  return (
    <StyleNavbar>
      <div className="nav">
        <div className="menu__bar">
          <i className="icon icon-menu-bar" />
        </div>
        <div className="nav__left">
          <div className="logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="input__item">
            <i className="icon icon-search icon-md " />
            <Input />
          </div>
        </div>

        <div className="nav__right">
          <i className="icon icon-notification" />
          <div className="avatar">
            <img
              src={Avatar}
              alt="avatar"
              style={{ width: "32px", height: "32px" }}
            />
          </div>
        </div>
      </div>
    </StyleNavbar>
  );
}

const StyleNavbar = styled.div`
  padding: 12px 20px;
  border-bottom: 1px solid #e3e3e3;
  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    .menu__bar {
      display: none;
    }
    &__left {
      display: flex;
      align-items: center;
      gap: 32px;

      .input__item {
        position: relative;
        width: 402px;
        padding: 13px 15px 13px 45px;
        background-color: #f9fafb;
        border: 1px solid #e5e7eb;
        border-radius: 16px;
        cursor: pointer;
        .icon-search {
          left: 15px;
          position: absolute;
          background-color: var(--color-search);
        }
      }
    }

    &__right {
      display: flex;
      align-items: center;
      gap: 12px;
      .icon-notification {
        background-color: var(--dark-blue);
      }
      .avatar {
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1024px) {
    .nav {
      .menu__bar {
        display: block;
      }

      &__left {
        display: none;
      }
    }
  }
`;
