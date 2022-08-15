import React from "react";
import styled from "styled-components";
import SettingsButton from "../settings-buttons";
//
import array from "../sidebar/static";
//
export default function ResponsiveMenu() {
  return (
    
    <StyleResponsiveMenu>
      {array.map((item) => {
        const { id, name, innerList, icon, path } = item;
        return (
          <div className="nav-item" key={id}>
            <div className="nav-item-left">
              <i className={icon} />
              <p>{name}</p>
            </div>
            <div className="nav-item-right">
              {innerList.length > 0 ? (
                <i className="icon icon-arrow-buttom" />
              ) : null}
            </div>
          </div>
        );
      })}


      <SettingsButton menuBar/>
    </StyleResponsiveMenu>
  );
}

const StyleResponsiveMenu = styled.div`
  display: flex;
  flex-direction: column;
  .nav-item {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px 20px 20px;
    cursor: pointer;
    &-left {
      display: flex;
      align-items: center;
      gap: 16px;
      p {
        font-size: 16px;
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0em;
      }
    }

    &:hover {
      .nav-item-left {
        i {
          background-color: var(--light-green);
        }
        p {
          color: var(--light-green);
        }
      }
      .nav-item-right {
        i {
          background-color: var(--light-green);
        }
      }
    }
  }

  /* &:last-child {
    border-bottom: 1px solid #e5e7eb;
  } */
`;
