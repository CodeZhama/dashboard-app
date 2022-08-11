import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//
import CabinetLayout from "../layout/cabinet-layout";
import Overview from "../modules/cabinet/overview";
import PageNotFound from "../modules/page-not-found";
import Message from "../modules/cabinet/message";
import MessageItem from "../modules/cabinet/message-id";
//
export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CabinetLayout />}>
          <Route index element={<Overview />} />
          <Route path="/message" element={<Message />} />
          <Route path="/message/:id" element={<MessageItem />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
