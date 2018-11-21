import _ from 'lodash';
import {CLEAR_LIKE_JOB, LIKE_JOB} from "../actions/types";
import {REHYDRATE} from 'redux-persist'

export default function (state = [], action) {
    switch (action.type) {
        case REHYDRATE:
            return action.payload.likedJobs || [];
        case CLEAR_LIKE_JOB:
            return [];
        case LIKE_JOB:
            return _.uniqBy([
                action.payload, ... state
            ], 'jobkey');
        default:
            return state;
    }
}