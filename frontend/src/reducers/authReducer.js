const authReducer = (state = { authData: null, loading: false, error: false }, action) => {
    switch (action.type) {
        case "AUTH_START":
            return { ...state, loading: true };
        case "AUTH_SUCCESS":
            localStorage.setItem("profile", JSON.stringify({ ...action?.payload }));
            return { ...state, authData: action.payload, loading: false, error: false };
        case "AUTH_FAIL":
            return { ...state, error: action.payload, loading: false };
        case "LOGOUT":
            localStorage.clear();
            return { ...state, authData: null, loading: false, error: false };
        default:
            return state;
    }
}

export default authReducer;