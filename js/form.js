

let contactForm = document.getElementById("contactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();


        let nameInput = document.getElementById("name");
        let emailInput = document.getElementById("email");
        let phoneInput = document.getElementById("phone");
        let favoriteSelect = document.getElementById("favorite");
        let dateInput = document.getElementById("lastDate");
        let messageInput = document.getElementById("message");


        let nameError = document.getElementById("nameError");
        let emailError = document.getElementById("emailError");
        let phoneError = document.getElementById("phoneError");
        let favoriteError = document.getElementById("favoriteError");
        let dateError = document.getElementById("dateError");
        let messageError = document.getElementById("messageError");
        let formSuccess = document.getElementById("formSuccess");

        nameError.textContent = "";
        emailError.textContent = "";
        phoneError.textContent = "";
        favoriteError.textContent = "";
        dateError.textContent = "";
        messageError.textContent = "";
        formSuccess.textContent = "";

        let formIsValid = true;


        if (nameInput.value == "") {
            nameError.textContent = "A név mező nem lehet üres.";
            formIsValid = false;
        } else if (nameInput.value.length < 3) {
            nameError.textContent = "A név legalább 3 karakter legyen.";
            formIsValid = false;
        }


        if (emailInput.value == "") {
            emailError.textContent = "Az e-mail mező nem lehet üres.";
            formIsValid = false;
        } else if (emailInput.value.indexOf("@") == -1) {

            emailError.textContent = "Adj meg egy érvényes e-mail címet (szerepeljen benne @).";
            formIsValid = false;
        }

        if (phoneInput.value == "") {
            phoneError.textContent = "A telefonszám mező nem lehet üres.";
            formIsValid = false;
        } else if (phoneInput.value.length < 7) {
            phoneError.textContent = "Adj meg egy érvényes telefonszámot (min. 7 karakter).";
            formIsValid = false;
        }

        if (favoriteSelect.value == "") {
            favoriteError.textContent = "Válaszd ki a kedvenc egzotikus ízedet.";
            formIsValid = false;
        }


        if (dateInput.value == "") {
            dateError.textContent = "Add meg, mikor kóstoltál utoljára különleges fagyit.";
            formIsValid = false;
        }

        if (messageInput.value == "") {
            messageError.textContent = "Az üzenet mező nem lehet üres.";
            formIsValid = false;
        } else if (messageInput.value.length < 10) {
            messageError.textContent = "Az üzenet legalább 10 karakter legyen.";
            formIsValid = false;
        }

        if (formIsValid) {
            formSuccess.textContent = "Köszönjük az üzenetet! Hamarosan jelentkezünk.";
            contactForm.reset();
        }
    });
}
