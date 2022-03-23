import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import FullLayout from "./layouts/FullLayout";
import Alerts from './views/ui/Alerts';
import Starter from './views/Starter';
function App() {
  return (
    <div>
      <Router>
        <FullLayout />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Starter}></Route>
            <Route path="/categoryDrink" component={Alerts}></Route>
            {/* <Route path="/add-categoryDrink" component={CreateCategoryDrinkComponent}></Route>
            <Route path="/update-categoryDrink/:id" component={UpdateCategoryDrinkComponent}></Route> */}

          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
