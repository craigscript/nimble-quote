import React from 'react';
import {Route} from 'react-router';
import {Redirect} from 'react-router-dom';

import {Header} from '../Header/Header';
import {NewQuoteWizard} from '../NewQuoteForm/NewQuoteWizard';
import {PurchaseOrderWizard} from '../PurchaseOrderForm/PurchaseOrderWizard';
import {ComponentsPage} from '../quotes/ComponentsPage/ComponentsPage';
import {SingleComponent} from '../quotes/SingleComponent/SingleComponent';
import {OfferPage} from '../pages/OfferPage/OfferPage';
import {ProtectedRoute} from '../routes/ProtectedRoute';
import {ViewOrderPage} from '../pages/ViewOrderPage/ViewOrderPage';
import {LoginPage} from "../pages/LoginPage/LoginPage";

const App = () => (
  <div className="App">
    <Header/>

    <Route exact path="/login" render={() => <LoginPage renderLogin={true}/>} />
    <Route exact path="/register" render={() => <LoginPage renderLogin={false}/>} />
    <Route exact path="/" render={() => <Redirect to="/components?q=pending"/>}/>
    <ProtectedRoute exact path="/components" component={ComponentsPage}/>
    <ProtectedRoute path="/components/:id" component={SingleComponent}/>
    <ProtectedRoute path="/bom/create" component={NewQuoteWizard}/>
    <ProtectedRoute path="/purchase-order/create" component={PurchaseOrderWizard}/>
    <Route path="/offer" component={OfferPage}/>
    <Route path="/view" component={ViewOrderPage}/>
  </div>
);

export default App;