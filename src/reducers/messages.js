import { SEND_MESSAGE } from "../constants/action-types"
import {getMessages} from "../utilities/static-data"
import _  from "lodash"

const messages = (state = getMessages(10), action) => {
    switch(action.type) {
        case SEND_MESSAGE:
            const {message, receiverId} = action.payload
            const allUserMessages = state[receiverId]
            const number = _.keys(allUserMessages).pop() + 1
            return {
                ...state,
                [receiverId]: {
                    ...allUserMessages,
                    [number] : {
                        number,
                        text: message,
                        is_user_msg: true
                    }
                }
            }
        default:
            return state
    }
}
export default messages