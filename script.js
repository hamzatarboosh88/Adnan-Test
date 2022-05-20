function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == 'Adnan' && password == 'Adnan@adnan') {
        window.location.href = './geschaft.html';
    } else {
        alert('Passwort falsch!');
    }

}