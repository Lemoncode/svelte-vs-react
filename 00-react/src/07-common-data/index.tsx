import React from "react";
import { Login } from "./login";
import { ShowUser } from "./showuser";
import { MyContextProvider } from "./user.context";

export const CommonData = () => {
  return (
    <MyContextProvider>
      <h1>07 Common Data</h1>
      <Login />
      <ShowUser />
    </MyContextProvider>
  );
};
