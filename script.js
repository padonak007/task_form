var lastName,
    email,
    city,
    country,
    $firstName = $("#firstName"),
    $lastName = $("#lastName"),
    $email = $("#email"),
    $country = $("#country"),
    $city = $("#city"),
    re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var countries = {
    USA: "USA",
    Germany: "Germany",
    France:"France",
};

var cities = {
    USA: {
        newYork:"New York",
        washington:"Washington DC",
        seatle:"Seatle",
    },
    Germany: {
        berlin:"Berlin",
        frankfurt:"Frankfurt",
        munchen:"Munchen",
    },
    France: {
        paris:"Paris",
    },
}

fillCountriesDropdown();

$firstName.change(function () {
    var firstName = $firstName.val();
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

$country.change(function (event) {
    fillCitiesDropdown(event.target.value);
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

function fillCountriesDropdown() {
    for (var key in countries) {
        $("<option/>")
        .text(countries[key])
        .appendTo($country);
    }
}

function fillCitiesDropdown(country) {
    $city.empty();
    for (var key in cities[country]) {
        $("<option/>")
        .text(cities[country][key])
        .appendTo($city);
    };
}