export default function resourceReducer( state = '', {type, payload
}) {
switch (type) {
    case 'updateResource': 
        return payload;
    default:
        return state;
  }
}