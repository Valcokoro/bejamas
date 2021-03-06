import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import ThirdPage from './components/ThirdPage';
import Navbar from './components/Navbar/Navbar';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
      <Route path='/' exact component={FirstPage} />
      <Route path='/page2' exact component={SecondPage} />
      <Route path='/page3' exact component={ThirdPage}  />
      </Switch>
    </div>
    <Navbar />
    </BrowserRouter>
  );
}

export default App;
