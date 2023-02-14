import logo from './logo.svg';
import './App.css';
import './Selector.js'
import Selector from './Selector.js';
import TaskBar from './Taskbar';
import EmailInput from './EmailInput';
import Form from './Form';
import InfoCard from './InfoCard';
import Card from '@mui/material/Card';
import InfoCard2 from './InfoCard2';
import React from 'react';

function App() {
  return (
    <div className="App">
        <TaskBar />
          <InfoCard />
          <InfoCard2 />
        <Form />
    </div>
  );
}

export default App;
