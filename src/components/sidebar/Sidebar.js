import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

///

import list from "./static";
import SettingsButton from "../settings-buttons";
///
export default function Sidebar() {
  const navigate = useNavigate();
  const [activeId, setActiveId] = useState(0);

  function changePage(id, path) {
    console.log(id);
    setActiveId(id);
    navigate(path);
  }
  return (
    <StyleSideBar>
      <ul className="router__ul">
        {list.map((item) => {
          const { id, icon, name, innerList, path } = item;
          return (
            <li
              className="router__li"
              key={id}
              onClick={() => changePage(id, path)}
            >
              <div className="icons">
                <i
                  className={activeId === id ? `${icon} + active__icon` : icon}
                />
              </div>
              <p className={activeId === id ? "text active__text" : "text"}>
                {name}
              </p>
              <div className="right__icon">
                {innerList.length > 0 ? (
                  <i
                    className="icon icon-arrow-buttom"
                    style={
                      activeId === id
                        ? { transform: "rotate(0)" }
                        : { transform: "rotate(180deg)" }
                    }
                  />
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>

      <SettingsButton />

      <div className="footer">
        <div className="footer__items">
          <i className="icon icon-adjustments" />
          <i className="icon icon-globe" />
          <i className="icon icon-setting" />
        </div>
      </div>
    </StyleSideBar>
  );
}

const StyleSideBar = styled.div`
  min-height: 100vh;
  position: relative;
  border-right: 1px solid var(--border-color);
  .router__ul {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 24px;
    padding: 16px 13px;
    border-bottom: 1px solid var(--border-color);
    .router__li {
      display: flex;
      align-items: center;
      cursor: pointer;
      .icons {
        margin-right: 16px;
        i {
          &.active__icon {
            background-color: var(--light-green);
          }
        }
      }
      .text {
        width: 180px;
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
        transition: 0.15s linear;
        &.active__text {
          color: var(--light-green);
        }
      }
      .right__icon {
        .icon-arrow-buttom {
          transition: 0.19s linear;
          transform: rotate(180deg);
        }
      }
    }
  }

  .footer {
    width: 100%;
    position: absolute;
    bottom: 16px;
    &__items {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 25px;
    }
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;
