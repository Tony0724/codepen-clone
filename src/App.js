import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home"
import Editormain from "./routes/Editormain";

function App() {
  return(
      <HashRouter>
          <Route path="/" component={Home} exact={true} />
          <Route path="/code-editor" component={Editormain} exact={true} />
    </HashRouter>
  )
    
}

export default App;