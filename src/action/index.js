import {SET_ACTIVE_USER_ID,DELETE_CONTACT_USER_ID} from "../constants/action-types"

export const setActiveUserId = id => ({
    type: SET_ACTIVE_USER_ID,
    payload: id,
})

export const deleteUserId = id => ({
    type: DELETE_CONTACT_USER_ID,
    payload: id
})