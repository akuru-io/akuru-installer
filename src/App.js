
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from 'components/Nav';
import Home from 'screens/AllFonts';
import Settings from 'screens/Settings';
import PremiumFonts from 'screens/PremiumFonts';
import VoteForFonts from 'screens/VoteFonts';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const Main = styled.div`
  height: 100vh;
  width:100%;
  overflow-y: scroll;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <NavBar/>
        <Main>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
        
            <Route exact path="/premium">
              < PremiumFonts />
            </Route>
         
            <Route exact path="/Vote">
              < VoteForFonts />
            </Route>
        
            <Route exact path="/settings">
              <Settings />
            </Route>
          </Switch>
        </Main>
      </Wrapper>
    </Router>
  );
}
export default App;
