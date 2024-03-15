// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';

import Dashboard from './components/Dashboard/Dashboard';
import ProductsManagement from './components/ProductsManagement/ProductsManagement';
import OrdersManagement from './components/OrdersManagement/OrdersManagement';
import OrdersCalendar from './components/OrdersCalendar/OrdersCalendar';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f4f4f4;
  }
`;

const NavContainer = styled.nav`
  background-color: #333;
  padding: 10px;
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
`;

const NavItem = styled.li`
  margin: 0;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router basename="/sai">
        <NavContainer>
          <NavList>
            <NavItem>
              <NavLink to="/">Dashboard</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/products">Products</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/orders">Orders</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/calendar">Calendar</NavLink>
            </NavItem>
          </NavList>
        </NavContainer>

        <Switch>
          <Route path="/products">
            <ProductsManagement />
          </Route>
          <Route path="/orders">
            <OrdersManagement />
          </Route>
          <Route path="/calendar">
            <OrdersCalendar />
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
