let url = "https://tt906-thales.herokuapp.com/times/"

async function callFetchWithGet(){
    let headers = new Headers();
    const options = {
        method : 'GET',
        mode : 'cors',
        headers : headers
    }
    const output = document.getElementById("json");
    const response = await fetch(url, options);

    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
}

async function callFetchWithPost(time){
    const options = {
        method : 'POST',
        mode : 'cors',
        headers : {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'time' : time
        })
    }
    await fetch(url, options);
}

async function callFetchWithPut(id, novoTime){
    const options = {
        method : 'PUT',
        mode : 'cors',
        headers : {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'time' : novoTime
        })
    }
        await fetch(`${url}${id}`, options);
}

async function callFetchWithDelete(id){
    const options = {
        method : 'DELETE',
        mode : 'cors',
        headers : {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        }
    }
    await fetch(`${url}${id}`, options);
}


/* Formulários */

function submitPost(){
    console.log("entrei na função");
    const form = document.forms['postForm'];
    const time = form["time"].value;
    console.log(time);
    callFetchWithPost(time);
    return false;
}

function submitPut(){
    const form = document.forms['putForm'];
    const id = form["id"].value;
    const time = form["time"].value;
    callFetchWithPut(id, time);
    return false;
}

function submitDelete(){
    const form = document.forms['deleteForm'];
    const id = form["id"].value;
    callFetchWithDelete(id);
    return false;
}