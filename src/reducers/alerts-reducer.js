import { UPDATE_ALERT } from '../actions/alert-actions';

export default function alertsReducer(state = {alertType:'Email'}, { type, payload })
    {
    switch (type) {
        case UPDATE_ALERT:
            console.log('im in the update reducer', state)
            return {...state, alertType:payload.alerts };

        default:
            return state;
    }
  } 