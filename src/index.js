import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from 'redux-persist/integration/react'
import { ContextProvider } from "./context/Context";

ReactDOM.render(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <ContextProvider>
      <App />
    </ContextProvider>
    </PersistGate>
    </Provider>,
  document.getElementById("root")
);
