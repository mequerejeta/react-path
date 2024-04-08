import * as React from "react";
import { render } from "react-dom";
import { Header } from "./Header";
import { CardList } from "./CardList";

import "./styles.css";

function App() {
  return (
    <div className="container">
      <Header />
      <CardList />
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
