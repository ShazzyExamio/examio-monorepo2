import { config } from '../config/config';
import axios from 'axios'

export const loginFunction = (email: string, password: string): any => {
    try
    {
        return axios.post(config.apiUrl + '/login/user',
        {
            email: email,
            password: password
        }).then(response => {
            if (response.data.token) {
                //store user data & token in local storage to keep user logged in
                console.log(response);
                global.user = response.data;
                global.firstName = response.data.user.first_name;
                localStorage.setItem('user', JSON.stringify(response.data));
                sessionStorage.setItem('token', response.data.token);
                return {
                    success: true,
                    response
                };
            }
            else {
                return {
                    success: false,
                    msg: 'Incorrect username/password'
                };
            }
        });
    }
    catch(error) {
        if (axios.isAxiosError(error)) {
            console.log('error message: ', error.message);
            return error.message;
          } else {
            console.log('unexpected error: ', error);
            return 'An unexpected error occurred';
          }
    }
  } 

  export const logout = () => {
    // remove user from local storage to log user out
    global.user = {}
    localStorage.removeItem('user');
  }