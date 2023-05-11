document.querySelector("#recherche").addEventListener("click", async () => {
    let input = document.querySelector('#in').value;

    fetchWeather(input).then((data) => {
        if (data.cod === "404") {
            alert("Ville introuvable");
            return;
        }
        if (data.cod === "200" || data.cod === 200) {
            let table = document.querySelector("#weatherTable");
            table.appendChild(createTableLine(data));
        }
    })

    fetchPhoto(input).then((data) => {
        if (data.total === 0) {
            alert("Photo introuvable");
            return;
        }
        if (data.total > 0) {
            let text = document.createElement("p");
            text.innerHTML = data.hits[0].tags;

            let img = document.createElement("img")
            img.src = data.hits[0].webformatURL;
            document.querySelector('#photo').appendChild(text);
            document.querySelector('#photo').appendChild(img);
        }
    })
})

async function fetchWeather(city) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=e55349be7e87f7701318d078543f02a7&units=metric`);
    return await response.json();
}

async function fetchPhoto(city) {
    const response = await fetch(`https://pixabay.com/api/?key=35334911-0548cc650ad9db3d870603e02&q=${encodeURIComponent(city)}&image_type=photo`)
    return await response.json();
}

function createTableLine(data) {
    let tr = document.createElement("tr");
    let td = document.createElement("td");
    td.innerHTML = data.id;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = data.name;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = data.sys.country;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = data.main.humidity;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = data.main.temp_min;
    tr.appendChild(td);

    td = document.createElement("td");
    td.innerHTML = data.main.temp_max;
    tr.appendChild(td);

    return tr;
}
