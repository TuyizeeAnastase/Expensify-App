import React from 'react';
import { BrowserRouter,Route,Switch,Link,NavLink} from 'react-router-dom';
import AddExpensePage from '../compnents/AddExpensePage';
import EditExpensePage from '../compnents/EditExpensePage';
import HelpPage from '../compnents/HelpPage';
import NotFoundPage from '../compnents/NotFoundPage';
import Header from '../compnents/Header';
import ExpenseDashbordPage from '../compnents/ExpenseDashbordPage';


const AppRouter=()=>(
  <BrowserRouter>
  <div>
     <Header/>
     <Switch>
     <Route path="/" component={ExpenseDashbordPage} exact={true}/>
     <Route path="/create" component={AddExpensePage} />
     <Route path="/edit/:id" component={EditExpensePage} />
     <Route path="/help" component={HelpPage} />
     <Route component={NotFoundPage}/>
    </Switch>
  </div>
  </BrowserRouter>
);


export default AppRouter;