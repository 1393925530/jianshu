import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import { GlobalStyled } from './style.js';
import { IconFontStyled } from './statics/iconfont/iconfont';
import Header from './common/header';
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
                  <Route path='/' exact render={()=><div>home</div>}></Route>
                  <Route path='/detail' exact render={()=><div>detail</div>}></Route>
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
