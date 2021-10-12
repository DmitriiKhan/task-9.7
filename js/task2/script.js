const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => { 
    alert ('Cлужит для вывода информации в консоль'); 
})

const demoalert = document.querySelector('#alert');
demoalert.addEventListener('click', () => { 
    alert ('Служит для вывода информации во всплывающем окне'); 
})

const demoprompt = document.querySelector('#prompt');
demoprompt.addEventListener('click', () => { 
    prompt ('Служит для вывода информации и ввода информации от пользователя во всплывающем окне'); 
})