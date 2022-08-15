import React, { useEffect, useState } from "react";
import styled from "styled-components";

//
import Input from "../input";
import Logo from "../../assets/icons/logo.svg";
import Avatar from "../../assets/image/Avatar.png";
import ResponsiveMenu from "../responsive-menu";
//
export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);
  useEffect(() => {
    let body = document.body;
    if (openMenu) {
      body.style.overflow = "hidden";
    }

    return () => {
      body.style.overflow = "unset";
    };
  }, [openMenu]);

  function openMenuBar() {
    setOpenMenu(!openMenu);
  }
  return (
    <StyleNavbar>
      <div className="nav">
        <div className="menu__bar" onClick={openMenuBar}>
          {openMenu ? (
            <i
              className="icon icon-close"
              style={{ width: "20px", height: "20px" }}
            />
          ) : (
            <i className="icon icon-menu-bar" />
          )}
          <div
            className={
              openMenu ? "inner__menu__bar active" : "inner__menu__bar"
            }
          >
            <ResponsiveMenu />
          </div>
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
  z-index: 12222999;

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
        position: relative;
        display: block;
        .inner__menu__bar {
          width: 100%;
          height: 100vh;
          position: fixed;
          left: -1000px;
          top: 61px;
          z-index: 1;
          background-color: var(--light);
          padding-top: 10px;
          &.active {
            transition: 0.16s linear;
            left: 0;
          }
        }
      }

      &__left {
        display: none;
      }
    }
  }
`;
