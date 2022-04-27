import React from 'react';
import './App.css';
import { TestRequestButton } from './TestRequestButton';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logos">
          <img src="/images/react-logo.png" className="App-logo" alt="React logo" />
          <img src="/images/docker-logo.png" className="App-logo" alt="Docker logo" />
          <img src="/images/k8s-logo.png" className="App-logo" alt="Kubernetes logo" />
        </div>
        <p>
          HOLA Jason's Test React App, deployed via Docker and Kubernetes. v1.2
        </p>
        <TestRequestButton />
      </header>
    </div>
  );
}

export default App;
