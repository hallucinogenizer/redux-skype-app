import { SET_ACTIVE_USER_ID, DELETE_CONTACT_USER_ID } from "../constants/action-types";

export default function activeUserId(state = null, action) {
    switch(action.type) {
        case SET_ACTIVE_USER_ID:
            return action.payload
        case DELETE_CONTACT_USER_ID:
            return action.payload === state ? null : state
        default:
            return state;
    }
}