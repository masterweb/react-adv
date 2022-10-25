import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';
import { ShoppingPage } from '../02-components-patterns/pages/ShoppingPage';

export const Navigation = () => {
  return (
    <Suspense fallback={null}>
      <Router>
      <div className="main-layout">
        <nav>
            <img src={ logo } alt="React Logo" />
          <ul>
            <li>
              <NavLink to="/" activeClassName='nav-active' exact>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeClassName='nav-active' exact>About</NavLink>
            </li>
            <li>
              <NavLink to="/users" activeClassName='nav-active' exact>Users</NavLink>
            </li>
            
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <h1>About</h1>
          </Route>
          <Route path="/users">
            <h1>About</h1>
          </Route>
          <Route path="/">
            <ShoppingPage/>
          </Route>          
          
        </Switch>
      </div>
    </Router>
    </Suspense>
    
  );
}