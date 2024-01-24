document.addEventListener('DOMContentLoaded', function() {
    function greetMe() {
        console.log("Hello!!");
    }

    var myTest = document.getElementById('test');

    if (myTest != null) {
        myTest.addEventListener('click', greetMe);
    } else {
        alert("failed");
    }
});