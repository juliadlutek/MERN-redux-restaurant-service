import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import DishList from "./components/dishes/DishList";
import OrderList from "./components/orders/OrderList";
import "./styles/App.css"
import Navbar from "./components/Navbar";
import DishCreate from "./components/dishes/DishCreate";
import DishDetails from "./components/dishes/DishDetails";
import DishEdit from "./components/dishes/DishEdit";
import OrderDetails from "./components/orders/OrderDetails";
import OrderCreate from "./components/orders/OrderCreate";
import OrderEdit from "./components/orders/OrderEdit";
import { getAllOrders } from './ducks/orders/operations'
import { getAllDishes } from './ducks/dishes/operations'
import { useEffect } from 'react';
import {connect} from 'react-redux'; 
import { I18nProvider, LOCALES } from './i18n/'

import translate from './i18n/translate'

function App({orders, getAllOrders, dishes, getAllDishes}) {

  useEffect(() => {
    if (orders.length === 0) {
        getAllOrders()
    }
    if (dishes.length === 0) {
      getAllDishes()
  }

  }, []) 

  return (
    <I18nProvider locale={LOCALES.ENGLISH}>
    
      <Router>
      <Switch>
        <Route exact path="/">
          <Dashboard/>
        </Route>
        <Route exact path="/dishes">
          <Navbar/>
          <DishList/>
        </Route>
        <Route path="/dishes/create">
          <Navbar/>
          <DishCreate/>
        </Route>
        <Route path="/dishes/edit/:id">
          <Navbar/>
          <DishEdit/>
        </Route>
        <Route exact path="/dishes/:id">
          <Navbar/>
          <DishDetails/>
        </Route>
        <Route exact path="/orders">
          <Navbar/>
          <OrderList/>
        </Route>
        <Route path="/orders/create">
          <Navbar/>
          <OrderCreate/>
        </Route>
        <Route path="/orders/edit/:id">
          <Navbar/>
          <OrderEdit/>
        </Route>
        <Route exact path="/orders/:id">
          <Navbar/>
          <OrderDetails/>
        </Route>

      </Switch>
      </Router>
      
    </I18nProvider>
  );
}

const mapStateToProps = (state) => {
  return {
      orders: state.orders,
      dishes: state.dishes
  }
}

const mapDispatchToProps = {
  getAllOrders,
  getAllDishes
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
