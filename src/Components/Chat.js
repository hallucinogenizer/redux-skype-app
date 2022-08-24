const Chat = ({message}) => {
    const {text, is_user_msg} = message
    return <span className={`py-4 px-6 ${is_user_msg ? "ml-auto bg-gray-600 rounded-bl-xl rounded-tl-xl" : "text-left bg-gradient-to-r from-cyan-500 to-blue-500 rounded-tr-xl rounded-br-xl"}`}>{text}</span>
}

export default Chat