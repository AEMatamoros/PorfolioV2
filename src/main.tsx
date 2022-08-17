import ReactDOM from "react-dom/client";
import "./main.scss";

import { store } from "./store/store";

import { Provider } from "react-redux";
import Navigation from "./views/Navigation";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <Navigation />
  </Provider>
);
