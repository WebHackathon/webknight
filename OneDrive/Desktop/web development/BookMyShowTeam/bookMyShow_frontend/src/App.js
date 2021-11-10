import Header from "./components/Header/Header";
import Slider from "./components/SliderImges";
import CardsSlider from "./components/CardsSlider";
import Premises from "./components/Premises";
import AllMovies from "./components/AllMovies";
import SingleMovie from "./components/SingleMovie";
import Registration from "./components/Registration";
import Login from "./components/LoginIn";
import axios from "axios";
import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
//axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token');
function App() {
  console.log(localStorage.getItem('token'));
  useEffect(() => {
    const createAxios = axios.create({
      headers: {
        Authentication: localStorage.getItem('token')
      }
    });
   createAxios.get('http://localhost:8080/check_validatons').then(response=>{
      console.log(response);
    }).catch(response=>{
      console.log(response);
    })
  }, [])

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route exact path="/">
            <Slider />
            < CardsSlider />
            <Premises />
          </Route>
          <Route exact path="/movies">
            <AllMovies />
            <Premises />
          </Route>
          <Route exact path="/movies/:id">
            <SingleMovie />
          </Route>
          <Route exact path="/registration">
            <Registration />
          </Route>
          <Route exact path="/Login_in">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
