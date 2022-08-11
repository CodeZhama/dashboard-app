import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import ReactLoading from "react-loading";
import { db } from "../../../firebase-config";
import { collection, getDocs } from "firebase/firestore";
///
import Charts from "../../../components/charts/Charts";
import CardForFetch from "../../../components/card-for-fetch/CardForFetch";
import apps from "./productList";
import Footer from "../../../components/footer";
//
export default function Overview() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [transactionLoading, setTransactionLoading] = useState(false);

  const [transaction, setTransaction] = useState([]);
  const transactionsCollectionRef = collection(db, "transactions");

  useEffect(() => {
    getUSers();
    getAllTransActions();
  }, []);

  async function getUSers() {
    setLoading(true);
    try {
      const { data } = await Axios.get("https://randomuser.me/api/?results=6");
      setUsers(data.results);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  async function getAllTransActions() {
    setTransactionLoading(true);
    try {
      const data = await getDocs(transactionsCollectionRef);
      setTransaction(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      console.log(error);
    } finally {
      setTransactionLoading(false);
    }
  }

  //
  return (
    <StyleOverview>
      <div className="bg__recharts">
        <div className="charts__title">
          <h1>Sales</h1>
          <i className="icon icon-sales-warning" />
        </div>
        <Charts />
      </div>

      {/* Latest and Product Section */}
      <StyleLatestCustomer>
        <CardForFetch latest>
          <h1>Latest Customers</h1>
          {loading ? (
            <div className="loading">
              <ReactLoading
                type="spinningBubbles"
                width={"80px"}
                height={"80px"}
                color="#0e9f6e"
              />
            </div>
          ) : (
            <div className="users">
              {users.map((item, index) => {
                return (
                  <div className="card__user" key={index}>
                    <div className="j-between">
                      <div className="avatar">
                        <img
                          src={item.picture.medium}
                          alt={item.picture.medium}
                        />
                      </div>
                      <div className="name__email">
                        <div className="full__name">
                          <p className="first__name">{item.name.first}</p>
                          <p className="last__name">{item.name.last}</p>
                        </div>
                        <p className="email">{item.email}</p>
                      </div>
                    </div>
                    <div className="price">$700</div>
                  </div>
                );
              })}
            </div>
          )}
        </CardForFetch>

        <CardForFetch products>
          <h1 className="product__title">Top products</h1>

          <div className="products">
            {apps.map((item) => {
              const { id, product, technology, sales } = item;
              return (
                <div className="products__item" key={id}>
                  <div className="products__item-left">
                    <h3>{product}</h3>
                    <h4>{technology}</h4>
                  </div>
                  <div className="products__item-right">
                    <h5>{sales}</h5>
                    <h6>sales</h6>
                  </div>
                </div>
              );
            })}
          </div>
        </CardForFetch>
      </StyleLatestCustomer>

      {/* Transactions */}

      <StyleTransactions>
        <CardForFetch transaction>
          <div className="header">
            <h1>Transactions</h1>
            <h4 className="sub">This is a list of latest transactions.</h4>
          </div>

          {transactionLoading ? (
            <div className="transaction__loading">
              <ReactLoading
                type="spinningBubbles"
                width={"80px"}
                height={"80px"}
                color="#0e9f6e"
              />
            </div>
          ) : (
            <div className="table">
              <ul className="table__title">
                <li>TRANSACTION</li>
                <li>DATE & TIME</li>
                <li className="table__amount">AMOUNT</li>
                <li className="table__status">STATUS</li>
              </ul>

              {transaction.map((item) => {
                const { id, isStatus, transaction, amount, data, name } = item;
                return (
                  <ul className="each__transaction" key={id}>
                    <li className="name_tr">
                      <span>{transaction}</span>
                      <span className="name__item">{name}</span>
                    </li>
                    <li className="data__time">{data}</li>
                    <li className="amount">{amount}</li>
                    <li
                      className={
                        isStatus === "progress"
                          ? "prog res"
                          : isStatus === "completed"
                          ? "completed res"
                          : "cancelled res"
                      }
                    >
                      {isStatus}
                    </li>
                  </ul>
                );
              })}
            </div>
          )}
        </CardForFetch>
      </StyleTransactions>

      {/* Footer */}
      <Footer />
    </StyleOverview>
  );
}

const StyleOverview = styled.div`
  width: 100%;
  padding: 16px 17px 16px 16px;
  background-color: #f9fafb;
  .bg__recharts {
    padding: 0 0 16px 0;
    background: var(--light);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
    border-radius: 16px;
    margin-bottom: 16px;
    .charts__title {
      display: flex;
      align-items: center;
      gap: 13px;
      padding: 46px 0 44px 32px;
      & > h1 {
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0em;
      }
      .icon-sales-warning {
        background-color: var(--border-color);
      }
    }
  }

  @media (max-width: 576px) {
    .bg__recharts {
      .charts__title {
      padding: 8px 0 24 px 8px;
      }
    }
  }
`;

const StyleLatestCustomer = styled.div`
  display: grid;
  grid-template-columns: 380px 1fr;
  gap: 16px;
  @media (max-width: 780px) {
    grid-template-columns: 1fr;
  }
`;

const StyleTransactions = styled.div`
  margin-top: 16px;
`;
