import React from 'react';
import './App.css';

import FindRepoForm from './components/FindRepoForm/FindRepoForm';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FindRepoForm />
      </header>
      <KanbanBoard />
    </div>
  );
}

export default App;
