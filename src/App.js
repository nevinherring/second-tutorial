// Named and default import/exports
//only one default export module

import React from "react";
import { name, age, person } from './data';

const App = () => (
  <section>
    <p>{name}</p>
    <p>{age}</p>
    <p>{person.name}</p>
  </section>
);

export default App;