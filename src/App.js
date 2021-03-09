import "./App.css";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/* {This will render the Search Component} */}
          <Route path="/search">
            <SearchPage />
          </Route>
          {/* {This will render the Home Component} */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        {/**Home (the one with search on => the entire page literally */}
        {/**Search Page (The results Page)*/}
      </Router>
    </div>
  );
}

export default App;
