import { generateUser } from "../utilities/static-data";
export default function user(state = generateUser(), action) {
    return state;
}