
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from 'components/Nav';
import Home from 'screens/AllFonts';
import Updates from 'screens/Updates';
import Settings from 'screens/Settings';
import InstalledFonts from 'screens/InstalledFonts';

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
          </Switch>
          <Switch>
            <Route exact path="/installed-fonts">
              <InstalledFonts />
            </Route>
          </Switch>
          <Switch>
            <Route exact path="/updates">
              <Updates />
            </Route>
          </Switch>
          <Switch>
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
