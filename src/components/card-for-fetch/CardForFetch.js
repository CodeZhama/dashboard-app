import React from "react";
import styled, { css } from "styled-components";

///
export default function CardForFetch({ children, ...props }) {
  return <StyleCard {...props}>{children}</StyleCard>;
}

const StyleCard = styled.div`
  background: var(--light);
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  padding: 24px 24px;
  border-radius: 16px;
  & > h1 {
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    letter-spacing: 0em;
    margin: 0 0 30px 0;
  }

  ${({ latest }) =>
    latest &&
    css`
      .loading {
        width: 100%;
        min-height: 86%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .card__user {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 9px 0;
        border-bottom: 1px solid #e5e7eb;
        .j-between {
          display: flex;
          align-items: center;
          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            overflow: hidden;
            margin-right: 8px;
            img {
              width: 100%;
            }
          }
          .name__email {
            display: flex;
            flex-direction: column;
            .full__name {
              display: flex;
              align-items: center;
              gap: 5px;
              font-size: 16px;
              font-weight: 600;
              line-height: 24px;
              letter-spacing: 0em;
            }
            .email {
              font-size: 12px;
              font-weight: 400;
              line-height: 18px;
              letter-spacing: 0em;
              color: #6b7280;
            }
          }
        }
        .price {
          font-size: 16px;
          font-weight: 600;
          line-height: 24px;
          letter-spacing: 0em;
        }
        &:last-child {
          border-bottom: none;
        }
      }
    `}

  ${({ products }) =>
    products &&
    css`
      .products {
        &__item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 9px 0;
          border-bottom: 1px solid #e5e7eb;
          &:last-child {
            border-bottom: none;
          }

          &-left {
            & > h3 {
              font-size: 16px;
              font-weight: 600;
              line-height: 24px;
              letter-spacing: 0em;
            }
            & > h4 {
              font-size: 12px;
              font-weight: 400;
              line-height: 18px;
              letter-spacing: 0em;
              color: var(--color-search);
            }
          }
          &-right {
            display: flex;
            align-items: center;
            gap: 4px;
            & > h5 {
              font-size: 16px;
              font-weight: 600;
              line-height: 24px;
              letter-spacing: 0em;
              text-align: right;
            }
            & > h6 {
              font-size: 16px;
              font-weight: 400;
              line-height: 24px;
              letter-spacing: 0em;
              text-align: right;
            }
          }
        }
      }
    `}



    ${({ transaction }) =>
    transaction &&
    css`
     box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
     .transaction__loading{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
     }


      .header {
        .sub {
          font-size: 14px;
          font-weight: 400;
          line-height: 20px;
          letter-spacing: 0em;
          color: var(--color-search);
          margin-bottom: 16px;
        }
      }

      .table {
        &__title {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
          justify-content: center;
          padding: 16px 16px;
          border-radius: 12px 12px 0 0;
          li {
            font-size: 12px;
            font-weight: 600;
            line-height: 18px;
            letter-spacing: 0em;
            color: var(--color-search);
          }
        }

      }
       
    ul {
      display: grid;
          grid-template-columns: repeat(4, 1fr);
          align-items: center;
          padding: 16px 16px;
          justify-content: center;
      
         
        .data__time {
            color: var(--color-search);
            font-size: 14px;
            font-weight: 400;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
          }
          .name_tr{
            display: flex;
            align-items: center;
            gap: 5px;
            .name__item{
              font-weight: 700;
            } 
          }
          .amount{
                font-size: 16px;
                font-weight: 500;
                line-height: 24px;
                letter-spacing: 0em;

          }

      
      .prog{
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #E1EFFE;
        color: color: #1E429F;
        max-width: 100px;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        border-radius: 10px;
        color: #1E429F;

      }
      .completed{
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 10px;
        max-width: 100px;
        background-color: #DEF7EC;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        border-radius: 10px;
        
      }
      .cancelled{
        display: flex;
        align-items: center;
        justify-content: center;
        color: #9B1C1C;
        background-color: #FBD5D5;
        border-radius: 10px;
        max-width: 100px;
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        letter-spacing: 0em;
        border-radius: 10px;
      }
        &:nth-child(2n + 1) {
          background-color: var(--table);
      }
    }



  @media (max-width: 780px) {
           .table{
             &__title{
              display: flex;
              align-items: center;
              justify-content: space-between;
              li{
              }
              .table__amount{
                display: none;
              }
              .table__status{
                display: none;
              }
            }
           }
           

          .each__transaction{
            display: flex !important;
            align-items: center !important;
            justify-content: space-between !important;
          
             .amount{
              display: none;
             }
             .res{
              display: none;
             }
             .name_tr{
                font-size: 12px;
                font-weight: 400;
                line-height: 18px;
                letter-spacing: 0em;
               
             }
           }
  } 

   `}
`;
