var firstName, lastName, email, city, country;
var $firstName = $("#firstName"),
    $lastName = $("#lastName"),
    $email = $("#email");
var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

$firstName.change(function () {
    firstName = $firstName.val();
    checkifEmpty(firstName, $firstName);
    console.log("First name:" + firstName);
});

$lastName.change(function () {
    lastName = $lastName.val();
    checkifEmpty(lastName, $lastName);
    console.log("Last name:" + lastName);
});

$email.change(function () {
    email = $("#email").val();
    validateEmail(email,$email);
    console.log("Email:" + email);
});

function validateEmail(fieldValue,$field) {
    if (re.test(fieldValue)){
        console.log("Email is valid");
        $field.removeClass("requiredClass");
        $field.addClass("fieldClass");
    } else {
        console.log("Invalid email");
        $field.removeClass("fieldClass");
        $field.addClass("requiredClass");
    }
}


function checkifEmpty(fieldValue, $field) {
    if (fieldValue.length != 0) {
        $field.removeClass("requiredClass");
        $field.addClass("fieldClass");
        return false;
    } else {
        $field.removeClass("fieldClass");
        $field.addClass("requiredClass");
        return true;
    }
}