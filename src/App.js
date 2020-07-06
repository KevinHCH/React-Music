import React from 'react';

import RoutePaths from "./routes/index"
import NavBar from "./components/Nav"
function App() {
  return (
    <div className="App">
      <NavBar />
      <RoutePaths/>
    </div>
  );
}

export default App;
