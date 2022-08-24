import {getMessages} from "../utilities/static-data"
const messages = (state = getMessages(10), action) => state
export default messages