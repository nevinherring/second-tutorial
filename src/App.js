// Named and default import/exports
//only one default export module

import React from "react";
import Booklist from './Booklist';
import "./App.css";

const App = () => (
  <section>
    <h1>This is our Application</h1>
    <Booklist />
  </section>
)

export default App;