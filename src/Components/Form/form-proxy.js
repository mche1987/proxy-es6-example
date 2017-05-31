var firstName = {
    id: "exampleFirstName",
    name: "Dummy First Name"
}
var lastName = {
    id: "exampleLastName",
    name: "Dummy Last Name"
}
var email = {
    id: "exampleEmail",
    name: "Dummy Email"
}
var password = {
    id: "examplePassword",
    name: "asdfasdf"
}

var inputHandlerForNames = {
    set: (target, prop, newValue) => {
        if (prop == "name" && target.id) {
            target[prop] = newValue;

            document.getElementById(target.id + "Displayer").innerText = `Your first name is: ${newValue}.`

            return true;
        } else {
            return false;
        }
    }
}
var emailHandler = {
    set: (target, prop, newValue) => {
        if (prop == "name" && target.id) {
            target[prop] = newValue;

            if (!newValue.includes("@")) {
                document.getElementById(target.id).style.borderColor = "red";
            } else {
                document.getElementById(target.id).style.removeProperty('border');
            }

            return true;
        } else {
            return false;
        }
    }
}

var passwordHandler = {
    set: (target, prop, newValue) => {
        if (prop == "name" && target.id) {
            target[prop] = newValue;

            if (newValue.length < 6) {
                document.getElementById(target.id).style.borderColor = "red";
            } else {
                document.getElementById(target.id).style.removeProperty('border');
            }

            return true;
        } else {
            return false;
        }
    }
}

var FirstNameProxied = new Proxy(firstName, inputHandlerForNames);
var LastNameProxied = new Proxy(lastName, inputHandlerForNames);
var EmailProxied = new Proxy(email, emailHandler);
var PasswordProxied = new Proxy(password, passwordHandler);

let proxiedArray = [FirstNameProxied, LastNameProxied, EmailProxied, PasswordProxied]

export {
    proxiedArray
}