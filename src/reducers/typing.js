import { SEND_MESSAGE, SET_MESSAGE_TYPING_VALUE } from "../constants/action-types";

export default function typing (state = "", action) {
    switch(action.type) {
        case SET_MESSAGE_TYPING_VALUE:
            return action.payload
        case SEND_MESSAGE:
            return ""
        default:
            return state
    }
}