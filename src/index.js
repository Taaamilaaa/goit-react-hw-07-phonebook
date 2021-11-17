import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import { Provider } from "react-redux";
// import store from "./redux/store"   ///Redux
import { PersistGate } from "redux-persist/integration/react"; 
import { store, persistor } from "./redux/store";  ///reduxToolkit

ReactDOM.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>  
      <Provider store={store}>
        <App />
      </Provider>
    </PersistGate>
  </React.StrictMode>,
  document.getElementById("root")
);
