function seeResults() {
    var genderField = document.getElementById('gender').value;
    var ageField = document.getElementById('age').value;
    var siblingField = document.getElementById('siblings').value;
    var childField = document.getElementById('children').value;
    var classField = document.getElementById('passClass').value;

    var result = document.getElementById('result').value;

}


// plug variables into ml model 

var resultsButton = document.getElementById('outcome-btn');
    resultsButton.addEventListener('click', seeResults);