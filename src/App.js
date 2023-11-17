import React  from 'react';
import PhraseController from "./components/PhrasesController"
import { getLook } from './components/Looks';
import './App.css';

function App() {
  return (
    <div className="App" style={getLook()}>
      <PhraseController />
    </div>
  );
}

export default App;
