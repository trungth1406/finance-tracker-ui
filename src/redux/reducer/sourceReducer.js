export default function sourceReducer(state = [], action) {
    switch (action.type) {
        case "ADD_NEW_RESOURCE":
            return [...state, {...action.resource}]
        default:
            return state
    }
}