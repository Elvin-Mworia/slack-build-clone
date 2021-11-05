import react from 'react';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import './App.css';
import Chat from './component/Chat';
import  SideBar from './component/SideBar';
import Header from './component/Header';
import styled from 'styled-components';




const AppBody=styled.div`
display:flex;
height:100vh;
`;

function App() {
  return (
    <div className="App">
    <Router>
    <Header/>
    <AppBody>
    <SideBar/>
   
    <Switch>
       <Route path="/" exact>
         <Chat/>
         
       </Route>

    </Switch>
    </AppBody>
      
    </Router>
   
    </div>

  );
}

export default App;
