import {LOGIN,ADD} from '../constant';
export const login = () => ({
    type: LOGIN
});
export const addItemInCart = (payload) =>({
    type: ADD,
    payload
});

