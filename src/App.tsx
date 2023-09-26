import React from 'react';
import './App.css';

import FindRepoForm from './components/FindRepoForm/FindRepoForm';
import KanbanBoard from './components/KanbanBoard/KanbanBoard';

function App() {
  return (
    <div className="App">
        <h5 style={{color: 'rgb(98 98 98)', margin: '20px 20px', textAlign: 'left', fontSize: '15px', width: '550px'}}>
          This application was made as a test task. <br/>
          Main task was implement a Kanban Board with three columns, which contains different types of issues from certain Github repository.  <br/>
          Issues must be draggable and have possible to change column. <br/>
          One of the point was to save all changed issues in certain repository and if user decide to open another repository and then back to previous, changes must be saved. <br/> 
          So, for example you can use this links:<br/>
          https://github.com/facebook/react <br/>
          https://github.com/facebook/react-native <br/>
        </h5>
      <header className="App-header">
        <FindRepoForm />
      </header>
      <KanbanBoard />
    </div>
  );
}

export default App;
