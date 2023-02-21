// Import some react tools
import React from "react"
import  ReactDOM  from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

// Import our first compoenet name: App

import { App } from "./App";

// Target the root div

const rootDiv = document.getElementById("root");

// Transform the root div into a react node 

const reactRoot =  ReactDOM.createRoot(rootDiv);

// Inject our App component inot the read node

reactRoot.render(

<Router>
<App/>
</Router>



);