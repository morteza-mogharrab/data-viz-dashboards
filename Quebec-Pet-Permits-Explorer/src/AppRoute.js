import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import { Landing } from "./pages/Landing";

const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Landing} />
      <Route
        path="/dashboard"
        render={() => (
          <Dashboard>
            <Dashboard />
          </Dashboard>
        )}
      />
    </div>
  </Router>
);

export default AppRouter;
