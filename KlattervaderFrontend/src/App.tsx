import React from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom';
import './styles/App.css';
import { AppView, MainView } from './styles/styled';

import About from './components/About/About';
import TopList from './components/TopList/TopList';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Aside from './components/Aside/Aside';

function App() {
  return (
    <div>
      <HashRouter>
        <AppView>

          <Aside />

        <div style={{ display: "grid", gridTemplateRows: "6vh calc(100vh - 6vh)" }}>
          <HeaderBar />
          <MainView>
            <Route exact path="/" component={TopList}/>
            <Route path="/about" component={About}/>
          </MainView>
        </div>

        </AppView>
      </HashRouter>
    </div>
  );
}

export default App;
