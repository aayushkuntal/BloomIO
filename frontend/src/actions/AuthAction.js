import * as AuthAPI from '../api/AuthRequest';

export const logIn = (formData) => async(dispatch) => {

    try {
        const {data} = await AuthAPI.logIn(formData);
        
    } catch (error) {
        console.log(error);
    }

}