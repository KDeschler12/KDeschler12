function setFormMessage(formElement, type, message ) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form--message--success", "form--message--error");
    messageElement.classList.add('form__message--${type}');
}

setFormMessage(loginForm, "Success", "Welcome to AplhaBEST!");

document.addEventListener("DOMContentLoaded",() => {
    const loginForm = document.querySelector("#login");
    const CreateAccountForm = document.querySelector("#CreateAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        CreateAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linklogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        CreateAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {

    });
});