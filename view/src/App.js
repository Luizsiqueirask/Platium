import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from "react";
import { CreateBeneficiary } from "./features/beneficiary/CreateBeneficiary"
import { EditBeneficiary } from "./features/beneficiary/EditBeneficiary"
import { ListBeneficiary } from "./features/beneficiary/ListBeneficiary"
import { PlansList } from "./features/plans/ListPlans";
import {NAVHouse} from "./features/NAVHouse";

import './App.css';
import {PriceList} from "./features/prices/ListPrices";

export default function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route path="/beneficiary">
              <ListBeneficiary />
            </Route>
            <Route path="/beneficiary/add-beneficiary">
              <CreateBeneficiary />
            </Route>
            <Route path="/beneficiary/edit-beneficiary">
              <EditBeneficiary />
            </Route>
            <Route path="/plans">
              <PlansList />
            </Route>
            <Route path="/prices">
              <PriceList />
            </Route>
            <Route path="/">
              <NAVHouse />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}