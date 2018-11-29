export const UPDATE_MEMORY = 'serverMemory:updateMemory';

export function updateMemory(newMemory) {
    return {
        type: UPDATE_MEMORY,
        payload: {
            memory: newMemory
        }
    }
}