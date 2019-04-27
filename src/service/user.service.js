// import { authHeader } from '../helpers/auth-header';

export const userService = {
    login,
    logout,
    // getAll,
    register,
    saveNewProject
};

const config= {
    apiUrl: 'http://localhost:8080'
}

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        "Authorization": "Basic QWRtaW46MTIzNDU=",
        "cache-control": "no-cache",},
        "processData": false,
        body: JSON.stringify({ username, password }),
        data: JSON.stringify({ username, password })
        
    };

    return fetch(`${config.apiUrl}/login`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }

            return user;
        });
}

function register(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    //return fetch(`${config.apiUrl}/users/registration`, requestOptions)
    return fetch(`${config.apiUrl}/user/register`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a user in the response
            if (user) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                console.log("Register succesful");
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user));
            }
            return user;
        });
}

function saveNewProject(name, description, startDate, endDate, img) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',
        "cache-control": "no-cache",},
        "processData": false,
        body: JSON.stringify({"name":name, "description":description, "startingDate":startDate, "finishDate":endDate, "photo":img})
    };

    return fetch(`${config.apiUrl}/api/project/add`, requestOptions)
        .then(handleResponse)
        .then(response => {
            // login successful if there's a user in the response
            if (response) {
                // store user details and basic auth credentials in local storage 
                // to keep user logged in between page refreshes
                console.log(response);
                //user.authdata = window.btoa(user);
                //localStorage.setItem('user', JSON.stringify(user));
            }

            return response;
        });
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// function getAll() {
//     const requestOptions = {
//         method: 'GET',
//         headers: authHeader()
//     };

//     return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
// }

function handleResponse(response) {
    console.log('handling response');
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                window.location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}