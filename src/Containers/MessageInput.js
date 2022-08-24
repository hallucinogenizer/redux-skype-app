import store from "../store/"
import {setMessageTypingValue, sendMessage} from "../action/"

const MessageInput = () => {
    const {typing, activeUserId} = store.getState()
    const handleTyping = e => store.dispatch(setMessageTypingValue(e.target.value))
    const handleSubmit = e => {e.preventDefault();store.dispatch(sendMessage(typing, activeUserId));}
    return <form className="w-4/5 my-4 mx-auto" onSubmit={handleSubmit}>
        <input type="text" onChange={handleTyping} placeholder="Type a message" value={typing} className="w-full p-4 bg-black text-white border-0 rounded-xl outline-0"></input>
    </form>
}

export default MessageInput