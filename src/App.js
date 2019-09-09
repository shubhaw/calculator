import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './components/Layout/Layout';
import CurrencyConverter from './containers/CurrencyConverter/CurrencyConverter';
import Calculator from './containers/calculator/calculator';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/currencyConverter" component={CurrencyConverter} />
            <Route path="/" exact component={Calculator} />
          </Switch>
        </Layout>
      </BrowserRouter>
    );
  }
}

export default App;
