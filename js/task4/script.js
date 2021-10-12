const linkText = document.querySelector('#linkText');

linkText.addEventListener('click', function (event) {
    this.textContent = prompt('Введите желаемый текст');
    event.preventDefault();
})