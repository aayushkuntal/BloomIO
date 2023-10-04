import * as AuthAPI from '../api/AuthRequest';

export const logIn = (formData) => async (dispatch) => {

    dispatch({ type: 'AUTH_START' });

    try {
        const { data } = await AuthAPI.logIn(formData);
        dispatch({ type: 'AUTH_SUCCESS', payload: data });

    } catch (error) {
        console.log(error);
        dispatch({ type: 'AUTH_FAIL', payload: error.response.data.message });
    }

}

export const signUp = (formData) => async (dispatch) => {

    dispatch({ type: 'AUTH_START' });

    try {
        const { data } = await AuthAPI.signUp(formData);
        console.log(data);
        dispatch({ type: 'AUTH_SUCCESS', payload: data });

    } catch (error) {
        console.log(error);
        dispatch({ type: 'AUTH_FAIL', payload: error.response.data.message });
    }

}
