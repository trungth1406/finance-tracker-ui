export default function sourceReducer(state = [], action) {
    switch (action.type) {
        case "ADD_NEW_RESOURCE":
            return [...state, action.resourceData]
        case "GET_RESOURCE":
            return [...action.resourceData, ...state]
        default:
            return state
    }
}




