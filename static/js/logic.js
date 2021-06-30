function seeResults() {
    var genderField = document.getElementById('gender').value;
    var ageField = document.getElementById('age').value;
    var siblingField = document.getElementById('siblings').value;
    var childField = document.getElementById('children').value;
    var classField = document.getElementById('passClass').value;

    var result = document.getElementById('result');
    
    if (nameField.length < 3) {
        result.textContent = 'Username must contain at least 3 characters';
        //alert('Username must contain at least 3 characters');
    } else {
        result.textContent = 'Your username is: ' + nameField;
        //alert(nameField);
    }
    }

var subButton = document.getElementById('subButton');
    subButton.addEventListener('click', getUserName, false); 