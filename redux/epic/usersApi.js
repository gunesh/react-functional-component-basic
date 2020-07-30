import { ajax } from 'rxjs/ajax';

export function doGetUsersListAPI() {
    return ajax({
        url: 'https://reqres.in/api/users',
        method: 'GET',
        crossDomain: true,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}