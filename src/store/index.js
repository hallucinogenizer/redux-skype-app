import { createStore } from "redux";
import {contacts} from "../utilities/static-data"
import reducer from "../reducers/"
const store = createStore(reducer, {contacts} )
export default store;