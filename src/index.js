import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import { Provider } from "react-redux"
import "typeface-roboto"
import App from "./components/App"
import registerServiceWorker from "./registerServiceWorker"
import reducers from "./reducers"
import middleware from "./middleware"
import "./index.css"

const store = createStore(reducers, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)
registerServiceWorker()
