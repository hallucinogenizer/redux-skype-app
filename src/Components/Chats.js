import Chat from "./Chat"
import { useEffect, useRef } from "react"
const Chats = ({messages}) => {
    const chatsRef = useRef()
    useEffect(()=>{
        chatsRef.current.scrollTop = chatsRef.current.scrollHeight
    }, )
    return <div className="flex flex-1 flex-col items-start gap-y-6 max-h-screen overflow-y-scroll" ref={chatsRef}>{messages.map(message=><Chat message={message} key={message.number}/>)}</div>
}

export default Chats