document.querySelector('#latitude').addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((e) => {
        document.querySelector('#lat').innerHTML = e.coords.latitude.toString();
    })
})

document.querySelector('#longitude').addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition((e) => {
        document.querySelector('#long').innerHTML = e.coords.longitude.toString();
    })
})

document.querySelector("#reculer").addEventListener("click", () => {
    window.history.go(-document.querySelector("#nbpages").value);
})

if (navigator.clipboard) {
    document.querySelector('#copier').addEventListener("click", () => {
        navigator.clipboard.writeText(document.querySelector("#textecopie").value);
    });

    document.querySelector('#coller').addEventListener("click", () => {
        navigator.clipboard.readText().then((text) => {
            document.querySelector("#textecolle").value = text;
        })
    })
}