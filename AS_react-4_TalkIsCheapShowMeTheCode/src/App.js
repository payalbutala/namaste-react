import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header"; // No need of extension as React will by default treat as Javascript file.
import Body from "./components/Body";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

// console.log(<AppLayout />);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
