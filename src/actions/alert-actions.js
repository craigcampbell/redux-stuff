export const UPDATE_ALERT = 'alerts:updateAlert';

export function updateAlert(newAlert) {
    return {
        type: UPDATE_ALERT,
        payload: {
            alerts: newAlert
        }
    }
}