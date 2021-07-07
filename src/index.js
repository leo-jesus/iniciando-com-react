import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import App2 from "./components/App2";
// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App2 title="Isso é um teste">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia,
      quam sed officiis libero repellat voluptate dolores amet molestiae nostrum
      aperiam inventore veritatis aut quaerat, tenetur laudantium natus? Saepe,
      minus!
    </App2>
  </React.StrictMode>,
  document.getElementById("root")
);

// serviceWorker.unregister();
