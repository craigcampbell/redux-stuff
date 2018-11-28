import { UPDATE_ALERT } from '../actions/alert-actions';

export default function alertsReducer(state = [], { type, payload })
    {
    switch (type) {
        case UPDATE_ALERT:
            return payload.alerts;
        default:
            return state;
    }
  } 