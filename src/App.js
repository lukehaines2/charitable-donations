import React from 'react';

import PageContainer from "./containers/pageContainer"
import { Header } from "./components/header";

function App() {
  return (
    <div className="appContainer">
      <Header />
      <PageContainer />
    </div>
  );
}

export default App;
