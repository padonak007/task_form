var $firstName = $("#firstName"),
    $lastName = $("#lastName"),
    $email = $("#email"),
    $country = $("#country"),
    $city = $("#city"),
    $add = $("[data-add]"),
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
    var lastName = $lastName.val();
    checkifEmpty(lastName, $lastName);
    console.log("Last name:" + lastName);
});

$email.change(function () {
    var email = $("#email").val();
    validateEmail(email,$email);
    console.log("Email:" + email);
});

$country.change(function (event) {
    $("[data-not-selected-option]").remove();
    $(event.target).attr("data-is-not-empty",true);
    fillCitiesDropdown(event.target.value);
});

$add.click(function (event) {
    if ($(event.target).prev().attr("data-is-not-empty")) {
        addInputandButton(event);
        $(event.target).remove();
        
    };
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

function addInputandButton(event) {
    $("<input/>")
        .attr("type", "text")
        .appendTo($(event.target).parent())
        .change(function (event) {
            $(event.target).next().attr("disabled", false);
        });
    $("<button>")
        .text("+")
        .attr("disabled",true)
        .appendTo($(event.target).parent())
        .click(function (event) {
            $("<option/>")
            .text($(event.target).prev("input").val())
            .appendTo($(event.target).siblings("select"));
            $(event.target).prev().remove();
            $(event.target).remove();
        });
}