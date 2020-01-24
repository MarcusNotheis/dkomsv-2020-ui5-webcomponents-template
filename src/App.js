import { ThemeProvider } from '@ui5/webcomponents-react/lib/ThemeProvider';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import AppBar from './appbar';
import StoreDetail from './detail';
import Home from './home';

function App() {
  return (
    <ThemeProvider withToastContainer>
      <AppBar/>

      <div style={{ position: 'absolute', top: '2.75rem', bottom: 0, left: 0, right: 0, overflowY: 'auto' }}>
        <HashRouter>
          <Route exact path="/" component={Home}/>
          <Route exact path="/stores/:storeId" component={StoreDetail}/>
        </HashRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
