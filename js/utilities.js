function getInputFieldValueById(id){
    console.log('Will get value by id');
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = parseFloat(inputValue)
    return inputValueNumber;
}

function getTextFieldValueById(id){
    const textValue = document.getElementById(id).innerText;
    const textValueNumber = parseFloat(textValue);
    console.log(textValue,textValueNumber);
    return textValueNumber;
}

function getSectionById(id){
    const section = document.getElementById(id);
    return section;
}