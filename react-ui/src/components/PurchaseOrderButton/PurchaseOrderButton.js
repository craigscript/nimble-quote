import React from 'react';
import {Link} from 'react-router-dom';

export const PurchaseOrderButton = () => {
  return <Link to="/purchase-order/create" className="btn btn-success">
     Start purchase
  </Link>
};