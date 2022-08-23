import './App.css';
import {Sidebar} from "./Sidebar"
import {Main} from "./Main"
import {contacts} from "./utilities/static-data"
import _ from "lodash"
function App() {
  return (
    <div className="App h-screen flex">
      <Sidebar contacts={_.values(contacts)}/>
      <Main/>
    </div>
  );
}

export default App;
