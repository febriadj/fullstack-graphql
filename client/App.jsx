import React from 'react';
import InputComp from './components/InputComp';
import ListComp from './components/ListComp';

import './styles/App.scss';

function App() {
  return (
    <div className="app">
      <div className="appWrap">

        <div className="main">
          <InputComp />
          <div className="listComp">
            <ListComp />
          </div>
        </div>

      </div>
    </div>
  )
}

export default App();
