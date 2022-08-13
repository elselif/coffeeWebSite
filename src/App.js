import Navbar from './components/Navbar';
import { BrowserRouter, Switch, Route,Redirect} from 'react-router-dom'
import React from 'react';
import Middle from './components/Middle';
import Edu from './components/Edu';
import Paragph from './components/Paragph';
import ParagphTwo from './components/ParagphTwo';
import ParagphThree from './components/ParagphThree';
import Menu from './components/Menu';

function App() {
  return (
    <BrowserRouter>
    <div>
    <Navbar/>
    </div>
    <div>
    <Middle/>
    </div>
    <div>
      <Edu></Edu>
    </div>
    <div>
      <Paragph></Paragph>
    </div>
    <div>
      <ParagphTwo></ParagphTwo>
    </div>
    <div>
      <ParagphThree></ParagphThree>
    </div>
    <div>
     <Menu></Menu>
    </div>
    

    </BrowserRouter>
    
   
   
  );
}

export default App;
