 document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault(); // stops page refresh

    // get values
    let name = document.querySelector("input[type='text']").value;
    let email = document.querySelector("input[type='email']").value;
    let message = document.querySelector("textarea").value;

    // simple validation
    if(name === "" || email === "" || message === "") {
        alert("Please fill all fields.");
        return;
    }

    // success message
    alert("Thank you " + name + "! Your message has been sent.");

    // clear form
    document.getElementById("contactForm").reset();

});