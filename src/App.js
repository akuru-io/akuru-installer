
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import NavBar from 'components/Nav';
import Home from 'screens/Home';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0;
  padding: 0;
`;

const Main = styled.div`
  height: 100vh;
  width : 75%;
  padding: 30px;
`;

function App() {
  return (
    <Router>
      <Wrapper>
        <NavBar/>
        <Main>
          test
        </Main>

      </Wrapper>
    </Router>

  );
}

export default App;
