import { UPDATE_MEMORY } from '../actions/update-memory';

export default function memoryReducer(state = {memory: '32'}, { type, payload })
    {
        console.log('what is my state - memoryReducer', state, type)
    switch (type) {
        case UPDATE_MEMORY:
            console.log('im in the memory reducer', state, payload.memory)
            return {...state, memory: payload.memory};
        default:
            return state;
    }
  } 