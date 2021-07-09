import React from "react";
import ReactDOM from "react-dom";
// import App from "./components/App";
// import App2 from "./components/App2";
// import App3 from "./components/App3";
// import App4 from "./components/App4";
// import App5 from "./components/App5";
import { Lista, Item } from "./components/Lista";

// import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Lista>
      <Item key={999} id={999} completo={true}>
        teste
      </Item>
      <Item key={1000} id={1000} completo={false}>
        teste2
      </Item>
    </Lista>

    {/* <App2 title="Isso é um teste">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil officia,
      quam sed officiis libero repellat voluptate dolores amet molestiae nostrum
      aperiam inventore veritatis aut quaerat, tenetur laudantium natus? Saepe,
      minus!
    </App2> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// serviceWorker.unregister();
