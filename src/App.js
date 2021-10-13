
import { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Profile from "./Components/Profile";
import Home from "./page/HomePage";
import NewReviewPage from "./page/NewReviewPage";

function App(props) {
  const [open, setOpen] = useState(false);
  const  SetValue = () =>  {
    setOpen(!open);
  }
  return (

    <Router>
      <Switch>
        <Route path="/" exact render={ (props) => <Home {...props} open = {open} />} />
        <Route path="/professor/:id" exact render={(props) => < NewReviewPage SetThisState={SetValue} {...props} />} />
        <Route path = "/profile" exact render = {(props) => <Profile {...props} />} />
      </Switch>
      
    </Router>
  )
}
export default App;
