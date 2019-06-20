import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Screens/Home";
import Notfound from "./Components/NotFound/NotFound";
import history from "./history";

function App() {
  return (
          <Router history={history}>
            <Switch>
              <Route path="/xfs" component={Home} />
              <Route component={Notfound} />
            </Switch>
          </Router>
  );
}

export default App;
