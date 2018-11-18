import {FACEBOOK_LOGIN_FAILED, FACEBOOK_LOGIN_SUCCESS} from "../actions/types";

export default function(state = null, action = null) {
    switch (action.type) {
        case FACEBOOK_LOGIN_SUCCESS:
            return {token : action.payload};
        case FACEBOOK_LOGIN_FAILED:
            return {token : null};
        default:
            return state;
    }
}