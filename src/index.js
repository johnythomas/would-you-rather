import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import "./index.css"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import reducers from "./reducers"
import middleware from "./middleware"

const store = createStore(reducers, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
