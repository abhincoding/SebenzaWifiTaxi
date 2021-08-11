import React, {Fragment} from 'react';
import './App.css';

//components
import InputTaxi from './components/InputTaxi';
import ListTaxi from './components/ListTaxi';

function App() {
  return <Fragment>
    <div className="container">
      <InputTaxi />
      <ListTaxi/>
    </div>
    
  </Fragment>;
}

export default App;
