let url = "https://tt905-224723.herokuapp.com/times/"

async function callFetchWithGet(){
    let header = new Headers();
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

async function callFetchWithPost(times){
    const options = {
        method : 'POST',
        mode : 'cors',
        headers : {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        },
        body :JSON.stringify({
            'times' : times
        })
    }
    const response = await fetch(url, options); 
    if (response.status >= 200 && response.status <= 300){
        console.log("Funcionou");
        output.innerHTML = await response.text();
    } else {
        console.log("Deu errado");
    }
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
            'times' : times
        })
    }
        await fetch('${url}${id}', options);
}

async function callFetchWithDelete(){
    const options = {
        method : 'DELETE',
        mode : 'cors',
        headers : {
            'Accept' : 'application/json',
            'content-type' : 'application/json'
        }
    }
    await fetch('${url}${id}', options);
}


/* Formulários */

function submitPost(){
    console.log("entrei na função");
    const form = document.forms['postForm'];
    const times = form["times"].value;
    console.log(times);
    callFetchWithPost(times);
    return false;
}

function submitPut(){
    const form = document.forms['putForm'];
    const id = form["id"].value;
    const times = form["times"].value;
    callFetchWithPut(id, times);
    return false;
}

function submitDelete(){
    const form = document.forms['putForm'];
    const id = form["id"].value;
    callFetchWithDelete(id);
    return false;
}