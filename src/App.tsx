import React from 'react';
import { Route } from 'react-router-dom';
import { CartPage } from './pages/cart/CratPage';
import { CatalogPage } from './pages/catalog/CatalogPage';
import { HeaderBlock } from './hoc/header/header';
import { LogoComponent } from './component/Logo/logo';
import { CartComponent } from './component/Cart/cart';
import { MenuCoponent } from './component/Menu/menu';

import './App.css'
function App() {

  return (
      <React.Fragment>
          <HeaderBlock>
              <LogoComponent/>
              <MenuCoponent/>
              <CartComponent/>
          </HeaderBlock>
            <div className={"content"}>
              <Route path="/" exact component={CatalogPage} />
              <Route path="/cart" component={CartPage} />
            </div>
      </React.Fragment>
  );
}

export default App;
