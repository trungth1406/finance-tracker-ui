export default function accountFormReducer(state = [], action) {
    switch (action.type) {
        case "ADD_ACCOUNT_FORM":
            return [...state, action.data]
        case "REMOVE_ACCOUNT_FORM":
            return [...state.slice(0, action.data), ...state.slice(action.data + 1)]
        default:
            return state
    }
}