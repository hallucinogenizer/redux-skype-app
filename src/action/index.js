import {
  SET_ACTIVE_USER_ID,
  DELETE_CONTACT_USER_ID,
  SET_MESSAGE_TYPING_VALUE,
  SEND_MESSAGE
} from "../constants/action-types";

export const setActiveUserId = (id) => ({
  type: SET_ACTIVE_USER_ID,
  payload: id,
});

export const deleteUserId = (id) => ({
  type: DELETE_CONTACT_USER_ID,
  payload: id,
});

export const setMessageTypingValue = (value) => ({
    type: SET_MESSAGE_TYPING_VALUE,
    payload: value
})

export const sendMessage = (message, receiverId) => ({
  type: SEND_MESSAGE,
  payload: {
    message,
    receiverId
  }
})