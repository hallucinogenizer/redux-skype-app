import {contacts} from "../utilities/static-data"
import { DELETE_CONTACT_USER_ID } from "../constants/action-types"

const reducer = (state = contacts, action) => {
    switch(action.type) {
        case DELETE_CONTACT_USER_ID:
            console.log("given",state)
            console.log("deleting",action.payload)
            const new_state = {...state}
            delete new_state[action.payload]
            console.log("returning",new_state)
            return new_state
        default:
            return state
    }
}

export default reducer