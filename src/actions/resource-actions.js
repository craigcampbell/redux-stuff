export const UPDATE_RESOURCE = 'resource:updateResource';

export function updateResource(newResource) {
    return {
        type: UPDATE_RESOURCE,
        paylod: {
            alert: newResource
        }
    }
} 