export default function sourceFormReducer(state = [], action) {
    switch (action.type) {
        case "ADD_RESOURCE_FORM":
            return [...state, action.data]
        case "REMOVE_RESOURCE_FORM":
            return [...state.slice(0, action.data), ...state.slice(action.data + 1)]
        default:
            return state
    }
}