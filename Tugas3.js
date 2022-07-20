import fetch from 'node-fetch';

fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => {
        return res.json();
    })
    .then(json => {
        return json[0];
    })
    .then(array => {
        console.log(array)
    })
    .catch(error => {
        console.log(`Failed`)
    })




