import React from 'react';

import Header from './components/Header';

function App() {
  return (
    <>
      <Header title="Homepage">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
        </ul>
      </Header>
      <Header title="projects">
        <ul>
          <li>HomePage</li>
          <li>Projects</li>
          <li>login</li>
        </ul>
      </Header>
    </>
  );
}

export default App;