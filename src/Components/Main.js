import Empty from "./Empty"
import ChatWindow from "../Containers/ChatWindow"

export const Main = ({user, activeUserId}) => {
    const renderMainContent = () => !activeUserId ? <Empty user={user} activeUserId={activeUserId}/> : <ChatWindow activeUserId={activeUserId} />
    return <main className="flex-1 bg-black">{renderMainContent()}</main>;
}