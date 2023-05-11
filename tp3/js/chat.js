let interval = 1000;

function func() {
    let channel = document.querySelector('#channels-list').value;
    fetchData('GET', 'php/chat.php?request=messages&channel=' + channel, displayMessage);
    setTimeout(func, interval);
}

window.addEventListener('load', () => setTimeout(func, interval));

document.querySelector('#seconde').addEventListener('change', () => {
    interval = parseInt(document.querySelector('#seconde').value, 10);
})

fetchData('GET', 'php/chat.php?request=channels', displayChannel);

fetchData('GET','php/chat.php?request=messages&channel=1', displayMessage);

document.querySelector('#channels-list').addEventListener('change', (e) => {
    document.querySelector('#errors').classList.add('d-none');
    fetchData('GET', 'php/chat.php?request=messages&channel=' + e.target.value, displayMessage);
})

document.querySelector('#formChat').addEventListener('submit', (e) => {
    console.log('submit');
    e.preventDefault();
    const message = document.querySelector('#messageData').value;
    document.querySelector('#messageData').value = '';
    const channel = document.querySelector('#channels-list').value;
    fetchData('POST', 'php/chat.php?request=sendMessage?request=message', () => {}, 'channel_id=' + channel + '&message=' + message);
})


function displayMessage(data) {
    let messages = document.querySelector('#chat-room')
    messages.value = '';
    data.forEach(d => {
        messages.value += d.nickname + ': ' + d.message + '\n';
    })
    let chatArea = document.querySelector('#chat-room');
    chatArea.scrollTop = chatArea.scrollHeight;
}

function displayChannel(data) {
    console.log(data);
    let channelList = document.querySelector('#channels-list')
    data.forEach(channel => {
        let options = document.createElement('option')
        options.value = channel.id;
        options.text = channel.name;
        channelList.append(options);
    })
}

function displayError(err) {
    console.log(err);
    let p = document.createElement('p');
    p.innerText = err.status + ' ' + err.statusText;
    let errors = document.querySelector('#errors')
    errors.append(p);
    errors.classList.remove("d-none");
    setTimeout(() => errors.classList.add('d-none'), 5000);
}