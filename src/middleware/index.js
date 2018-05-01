import { applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"

export default composeWithDevTools(applyMiddleware(thunk))
