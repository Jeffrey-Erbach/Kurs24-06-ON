// App.js - Hauptkomponente
import React from 'react';
import UserList from './src/UserList';
import Counter from './src/Counter';

function App() {
  return (
    <div>
      <h1>React Grundlagen: Beispielanwendung</h1>
      <Counter />
      <UserList />
    </div>
  );
}

export default App;
