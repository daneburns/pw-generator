function myFunction () {
    var element = document.getElementById("passwordCriteria");
    element.classList.remove("invisible");
    var element2 = document.getElementById('generatePassword')
    element2.classList.add('disabled');
}

function myFunction2 () {
    var element = document.getElementById("criteriaSubmit");
    element.classList.add("disabled");
    var element2 = document.getElementById('generatePassword')
    element2.classList.add('disabled');
}

function myFunction3 () {
    var element = document.getElementById("checkYes");
    var disabledElement = document.getElementById("checkNoForm")
    disabledElement.classList.add("invisible");
    if (element === true) {
        console.log("nice!")
        
    } else {
        console.log("uh oh")
    }
}

