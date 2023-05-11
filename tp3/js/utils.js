/*const fetchData = (type, url, data) => {
   return new Promise((resolve, reject) => {
        fetch(url, {
            method: type,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.status === 200  ? response.json() : reject(response))
            .then(data => resolve(data))
            .catch(error => reject(error))
    })
}*/

const fetchData = (type, url, callback = () => {}, data = null) => {
    let xhr = new XMLHttpRequest();
    xhr.open(type, url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function () {
        switch (xhr.status) {
            case 200:
                callback(JSON.parse(xhr.responseText));
                break;
            default:
                console.log('HTTPS error' + xhr.status);
        }
    }
    xhr.send(data);
}