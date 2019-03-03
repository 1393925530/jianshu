import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyled } from './style.js';
import { IconFontStyled } from './statics/iconfont/iconfont';
import Header from './common/header';
import Home from './pages/home';
import Detail from './pages/detail';
import store from './store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
            <Header />
              <BrowserRouter>
                <div>
                  <Route path='/' exact component={Home}></Route>
                  <Route path='/detail' exact component={Detail}></Route>
                </div>
              </BrowserRouter>
            <IconFontStyled />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
