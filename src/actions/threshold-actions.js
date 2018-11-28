export const UPDATE_ALERT_THRESHOLD = 'alertThreshold:updateAlertThreshold';

export function updateAlertThreshold(newAlertThreshold) {
    return {
        type:  UPDATE_ALERT_THRESHOLD,
        payload: {
            alertThreshold: newAlertThreshold
        }
    }
}