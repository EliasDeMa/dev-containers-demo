import React, { FC } from 'react';
import './App.scss';

interface AppProps {}

const App: FC<AppProps> = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dev Container Demo</h1>
        <p>
          This app is running on Node
        </p>
      </header>
    </div>
  );
};

export default App;