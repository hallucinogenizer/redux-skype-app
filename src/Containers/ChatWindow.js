import store from "../store"
import Header from "../Components/Header"
import Chats from "../Components/Chats"
import _ from "lodash"

export default function ChatWindow({activeUserId}) {
    const {contacts, messages} = store.getState()
    const activeUser = contacts[activeUserId]
    const activeChats = messages[activeUserId]
    return (
        <div className="text-white">
            <Header user={activeUser}/>
            <Chats messages={_.values(activeChats)}/>
        </div>
    )
}