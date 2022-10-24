const button = window.document.querySelectorAll('button');
button[0].addEventListener('click', addOnText);
button[1].addEventListener('click', addOnText);
button[2].addEventListener('click', addOnText);
button[3].addEventListener('click', addOnText);
button[4].addEventListener('click', addOnText);
button[5].addEventListener('click', addOnText);
button[6].addEventListener('click', addOnText);
button[7].addEventListener('click', addOnText);
button[8].addEventListener('click', addOnText);
button[9].addEventListener('click', addOnText);
button[10].addEventListener('click', addOnText);
button[11].addEventListener('click', addOnText);
button[12].addEventListener('click', addOnText);
button[13].addEventListener('click', addOnText);
button[14].addEventListener('click', addOnText);
button[15].addEventListener('click', addOnText);
button[16].addEventListener('click', addOnText);
button[17].addEventListener('click', addOnText);
button[18].addEventListener('click', makeTheCount);

const inputText = window.document.querySelector('input');
inputText.addEventListener('keydown', verifyKey);

function verifyKey(value) {
    if(value.key === 'Enter'){
        makeTheCount();
    }
}

function addOnText(value) {
    
    let buttonValue = value.target.innerHTML;

    switch (buttonValue) {
        case 'Limpar Tudo': buttonValue = ''
        inputText.value = '';
        break;
        
        case '\u002B': buttonValue = '+';
        break;

        case '\u2212': buttonValue = '-';
        break;

        case '\u00F7': buttonValue = '/';
        break;

        case 'x': buttonValue = '*';
        break;

        case '\u0025': buttonValue = '/100';
        break;

        case '\u002C': buttonValue = '.';
        break;

        case '&lt;': buttonValue = '';
        let initialArray = Array.from(inputText.value);
        initialArray.pop();
        let finalArray = initialArray.toString();
        inputText.value = finalArray.replace(/,/g, '');
        break;

        default: 'Valor inválido';
        break;
    }
    inputText.value += buttonValue;
}

function makeTheCount() {
    try {
        const textIn = eval(inputText.value)
        inputText.value = textIn;
    } catch (error) {
        window.alert('Operação matemática incorreta!')
    }
}