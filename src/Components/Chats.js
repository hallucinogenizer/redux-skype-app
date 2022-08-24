import Chat from "./Chat"
const Chats = ({messages}) => {
    return <div className="flex flex-1 flex-col items-start h-full gap-y-6">{messages.map(message=><Chat message={message} key={message.number}/>)}</div>
}

export default Chats