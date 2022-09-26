import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useState } from "react";
import { NavigationBar } from "./navigationBar/NavigationBar.jsx"
import { MessageHash } from "./components/sign/sign.jsx";

const App = () => {
  const [globalProvider, setGlobalProvider] = useState(null);


  return (
      <Router>
          <NavigationBar
              globalProviderProps={globalProvider}
              changeGlobalProvider={(globalProvider) =>
                  setGlobalProvider(globalProvider)
              }
          ></NavigationBar>
          <MessageHash globalProviderProps={globalProvider}></MessageHash>
      </Router>
  );
};

export default App;