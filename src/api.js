const APIURL = '/api/todos/';

   /* handleErrors(resp) {
            if(!resp.ok) {
                if(resp.status >= 400 && resp.status<500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                }else{
                    let err = {errorMessage: 'Please try again later. Server is not responding'};
                    throw err;
                }
            }
            return resp.json();
    }*/
    
    export async function getTodos() {
        return fetch(APIURL)
        .then(resp => {
             if(!resp.ok) {
                if(resp.status >= 400 && resp.status<500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                }else{
                    let err = {errorMessage: 'Please try again later. Server is not responding'};
                    throw err;
                }
            }
            return resp.json();
        })
    }

    export async function createTodo(val) {
        return fetch(APIURL, {
            method: 'post',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                name: val
            })
        })
        .then(resp => {
             if(!resp.ok) {
                if(resp.status >= 400 && resp.status<500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                }else{
                    let err = {errorMessage: 'Please try again later. Server is not responding'};
                    throw err;
                }
            }
            return resp.json();
        })
    }
    
    export async function removeTodo(id) {
        const deleteURL = APIURL + id;
        return fetch(deleteURL, {
            method: 'delete',
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })
         .then(resp => {
             if(!resp.ok) {
                if(resp.status >= 400 && resp.status<500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                }else{
                    let err = {errorMessage: 'Please try again later. Server is not responding'};
                    throw err;
                }
            }
            return resp.json();
        })
    }
    
    export async function updateTodo(t) {
        const updateURL = APIURL + t._id;
        return fetch(updateURL, {
            method: 'put',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify({
                completed: !t.completed
            })
        })
        .then(resp => {
             if(!resp.ok) {
                if(resp.status >= 400 && resp.status<500) {
                    return resp.json().then(data => {
                        let err = {errorMessage: data.message};
                        throw err;
                    });
                }else{
                    let err = {errorMessage: 'Please try again later. Server is not responding'};
                    throw err;
                }
            }
            return resp.json();
        })
    }
