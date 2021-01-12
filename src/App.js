

import "tailwindcss/tailwind.css"
import Home from "./Components/Home"
import About from "./Components/About"
import SinglePost from "./Components/SinglePost"
import Post from "./Components/Post"
import Project from "./Components/Project"
import NavBar from "./Components/NavBar"


import {BrowserRouter,Route,Switch} from "react-router-dom";

function App() {
  return (

    <BrowserRouter>
    <NavBar></NavBar>
    <Switch>
      <Route component={Home} path='/' exact></Route>
      <Route component={About} path='/about'></Route>
      <Route component={SinglePost} path='/post/:slug'></Route>
      <Route component={Post} path='/post'></Route>
      <Route component={Project} path='/project'></Route>
    </Switch>
    </BrowserRouter>

    )
}

export default App;
