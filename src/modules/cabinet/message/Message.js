import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../../../firebase-config";
import ReactLoading from "react-loading";

import { collection, getDocs, doc, deleteDoc } from "firebase/firestore";

//

export default function Message() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  const messageCollctionRef = collection(db, "message-tutorial");
  useEffect(() => {
    getAllMessages();
  }, []);

  async function getAllMessages() {
    setLoading(true);
    try {
      const data = await getDocs(messageCollctionRef);
      setMessage(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch (error) {
      setLoading(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  async function deleteMessage(id) {
    const messageDoc = doc(db, "message-tutorial", id);
    await deleteDoc(messageDoc);
    getAllMessages();
  }

  return (
    <StyleMessage>
      <div className="message__header">
        <h1>hello</h1>
      </div>
      {loading ? (
        <div className="loading">
          <ReactLoading
            type="spinningBubbles"
            width={"100px"}
            height={"100px"}
            color="#0e9f6e"
          />
        </div>
      ) : (
        <div className="message__list">
          {message.map((item) => {
            const { id, age, phone, name, kasbi } = item;
            return (
              <div className="message__item" key={id}>
                <div className="name__Checkbox">
                  <input type="checkbox" />
                  <div className="name">{name}</div>
                </div>
                <div className="phone">{phone}</div>
                <div className="btn__time">
                  <div className="date">12:24 PM</div>
                  <div className="delete">
                    <button
                      className="delete__btn"
                      onClick={() => deleteMessage(id)}
                    >
                      delete
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </StyleMessage>
  );
}

const StyleMessage = styled.div`
  width: 100%;
  padding: 16px 16px;
  .loading {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .message__list {
    .message__item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 1px solid #e5e7eb;
      padding: 15px 5px;
      .name__Checkbox {
        display: flex;
        align-items: center;
        gap: 6px;
      }

      .btn__time {
        display: flex;
        align-items: center;
        gap: 20px;
        .delete__btn {
          padding: 10px 20px;
          background-color: #f05252;
          border: none;
          border-radius: 5px;
          color: white;
          cursor: pointer;
        }
      }
      &:nth-child(2n + 1) {
        background-color: var(--table);
      }
    }
  }
`;
