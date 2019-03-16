import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import AppNavigation from './components/AppNavigation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout style={{ background: 'url(/obraz.jpg) center / cover' }}>
          <Header transparent title="Krajobraz" style={{ color: 'black' }}>
            <AppNavigation/>
          </Header>
          <Drawer title="Krajobraz">
           <AppNavigation/>
          </Drawer>
          <Content>
            <h1>WATERFALL </h1>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
