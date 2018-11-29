export const UPDATE_ALERT = 'serverMemory:updateAlert';

export function updateAlert(newAlert) {
    return {
        type: UPDATE_ALERT,
        payload: {
            alerts: newAlert
        }
    }
}