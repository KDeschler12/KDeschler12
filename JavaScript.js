document.addEventListener("DOMContentLoaded",()=>{
    const loginForm = document.querySelector("#login");
    const CreateAccountForm = document.querySelector("#CreateAccount");

    document.querySelector("#linklogin").addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        CreateAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkCreateAccount").addEventListener("click", e=>{
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        CreateAccountForm.classList.add("form--hidden");
    });
});