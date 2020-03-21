let output = document.getElementById('output');
let target = document.getElementById('target');

window.onload = function () {
    output.innerHTML = '<p>Welcome page!</p>';
}

target.onclick = function () {
    output.innerHTML += '<p>Auch!</p>';
}

target.onmouseover = function () {
    output.innerHTML += '<p>Catch me!</p>';
    target.style.top = Math.floor(Math.random() * 490) + 'px';
    target.style.left = Math.floor(Math.random() * 490) + 'px';
}
