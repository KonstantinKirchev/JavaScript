function validateInput(){
    var inputElement = document.getElementById('input').value;

    trimString(inputElement);

    var divElementForValidate = document.getElementById('theDiv').innerHTML;

    divElementForValidate = inputElement;
    document.getElementById('theDiv').innerHTML = divElementForValidate;

    var isValidEmail = validateEmail(inputElement);
    console.log(isValidEmail);

    if (isValidEmail) {
        changeBackground('lightgreen');
    }
    else {
        changeBackground('red');
    }

}

function validateEmail(email) {
    var result = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return result.test(email);
}

function changeBackground(color) {
    var element = document.getElementById('theDiv');
    element.style.background = color;
}

function trimString(string) {
    return string.trim();
}
