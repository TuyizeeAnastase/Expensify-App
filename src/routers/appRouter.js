import React from 'react';
import { Router,Route,Switch,Link,NavLink} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import AddExpensePage from '../compnents/AddExpensePage';
import EditExpensePage from '../compnents/EditExpensePage';
import HelpPage from '../compnents/HelpPage';
import NotFoundPage from '../compnents/NotFoundPage';
import ExpenseDashbordPage from '../compnents/ExpenseDashbordPage';
import LoginPage from '../compnents/LoginPage';
import configureStore from '../store/configureStore';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history=createHistory();

const AppRouter=()=>(
  <Router history={history}>
  <div>
     <Switch>
     <PublicRoute path="/" component={LoginPage} exact={true}/>
     <PrivateRoute path="/dashboard" component={ExpenseDashbordPage}/>
     <PrivateRoute path="/create" component={AddExpensePage} />
     <PrivateRoute path="/edit/:id" component={EditExpensePage} />
     <Route component={NotFoundPage}/>
    </Switch>
  </div>
  </Router>
);


export default AppRouter;