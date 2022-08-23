import './App.css';
import {Sidebar} from "../Components/Sidebar"
import {Main} from "../Components/Main"
import store from "../store/"
import _ from "lodash"
function App() {
  const {contacts, user, activeUserId} = store.getState()
  return (
    <div className="App h-screen flex">
      <Sidebar contacts={_.values(contacts)}/>
      <div className="bg-black flex-1"><Main user={user} activeUserId={activeUserId}/></div>
    </div>
  );
}

export default App;
