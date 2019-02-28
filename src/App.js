import React, { Component } from 'react';
import { GlobalStyled } from './style.js';
import { IconFontStyled } from './statics/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
      <IconFontStyled />
      </div>
    );
  }
}

export default App;
