import axios from 'axios';
import store from '../store';
import { clearCurrentUser } from '../store/actions/user-actions';
import { history } from '../commons/history';


export const authorizationHeader = () => {
    
    const currentUser = store.getState().user;

    return {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${currentUser?.token}`
    };
};

/* 
    What if we have a session user but if we have an invalid JWT token? (like expired)

    We need to intercept the request. If there is an error and status is unauthorized or forbiden then sign out.

    This function can be called from App.js or index.js
*/
export function handleResponseWithLoginCheck() {
    
    axios.interceptors.response.use(
        response => response, 
        error => {
            const currentUser = store.getState().user;
            const isLoggedIn = currentUser?.token;
            const status = error?.response?.status;
            if (isLoggedIn && [401, 403].includes(status)) {
                store.dispatch(clearCurrentUser());
                /* 
                    How can we use the router here since this is pure js? With the browser history.
                */
                history.push('/login');
            }
            return Promise.reject(error);
        }
    );
};