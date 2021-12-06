// import { Suspense, useContext, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// views
import Home from "../views/home";
import Login from "../views/auth/Login";
import Signup from "../views/auth/Signup";
import Moviedetails from "../views/home/Moviedetails";
import { Cinema } from "../views/Schedulesection/Cinema";
import { Movies } from "../views/Schedulesection/Movies";
import { Index } from "../views/Schedulesection/Index";
import { Citynames } from "../views/Schedulesection/Citynames";

// import AdminLogin from "../admin/views/auth/Login";
import AdminLayout from "../admin/layouts/Admin";
import AdminAuthLayout from "../admin/layouts/Auth";
import SuccessPage from "../views/home/Bookingsection/SuccessPage";

const AppRouter = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details">
          <Moviedetails />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/movies">
          <Movies />
        </Route>
        <Route path="/movies/:movieid" component={Moviedetails} />
        <Route exact path="/cinemas">
          <Index />
        </Route>
        <Route exact path="/cities">
          <Citynames />
        </Route>
        <Route exact path="/payment-confirm">
          <SuccessPage />
        </Route>

        <AdminAuthLayout path="/auth" render={(props) => <AdminAuthLayout {...props} />} />
        <AdminLayout path="/admin" render={(props) => <AdminLayout {...props} />} />

        {/* <Route exact path="/admin/login">
          <AdminLogin />
        </Route> */}
      </Switch>

      <ToastContainer />
    </Router>
  );
};

export default AppRouter;
