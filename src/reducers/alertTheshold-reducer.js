import { UPDATE_ALERT_THRESHOLD } from '../actions/threshold-actions';

export default function alertThresholdReducer(state = 'Daily', { type, payload })
    {
    switch (type) {
        case UPDATE_ALERT_THRESHOLD:
            return payload.alertThreshold;
        default:
            return state;
    }
  } 