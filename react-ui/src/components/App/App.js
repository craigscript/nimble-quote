import React from 'react';
import {Route} from 'react-router';
import {Redirect} from 'react-router-dom';

import {Header} from '../Header/Header';
import {NewQuoteWizard} from '../NewQuoteForm/NewQuoteWizard';
import {PurchaseOrderWizard} from '../PurchaseOrderForm/PurchaseOrderWizard';
import {ComponentsPage} from '../quotes/ComponentsPage/ComponentsPage';
import {SingleComponent} from '../quotes/SingleComponent/SingleComponent';
import {OfferPage} from '../pages/OfferPage/OfferPage';

const App = () => (
  <div className="App">
    <Header/>
    <Route exact path="/" render={() => <Redirect to="/components"/>}/>
    <Route exact path="/components" component={ComponentsPage}/>
    <Route path="/components/:id" component={SingleComponent}/>
    <Route path="/bom/create" component={NewQuoteWizard}/>
    <Route path="/purchase-order/create" component={PurchaseOrderWizard}/>
    <Route path="/offer" component={OfferPage}/>
  </div>
);

export default App;