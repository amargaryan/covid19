import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import CountryPage from "./components/countryPage/CountryPage";
import MainPage from "./components/mainPage/MainPage";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' >
            <MainPage/>
        </Route>
        <Route path='/:country' children={<CountryPage />}>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
