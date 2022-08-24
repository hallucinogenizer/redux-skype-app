import store from "../store"
import Header from "../Components/Header"
import Chats from "../Components/Chats"
import MessageInput from "./MessageInput"
import _ from "lodash"

export default function ChatWindow({activeUserId}) {
    const {contacts, messages} = store.getState()
    const activeUser = contacts[activeUserId]
    const activeChats = messages[activeUserId]
    return (
        <div className="text-white h-screen flex flex-col">
            <Header user={activeUser}/>
            <Chats messages={_.values(activeChats)}/>
            <MessageInput/>
        </div>
    )
}