function linkText() {
    let linkText = document.getElementById('link-text').value;
    document.getElementById('duplicate-field').innerHTML = linkText;
}

const outPut = document.getElementById('output');

outPut.addEventListener('click', function (e) {
    let consoleText = document.getElementById('link-text').value;
    console.log(consoleText);
    document.getElementById('link-text').value = "";
    document.getElementById('duplicate-field').innerHTML = "";
    e.preventDefault();
})