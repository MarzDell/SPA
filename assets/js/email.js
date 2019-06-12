function sendMail(contactForm) {
    emailjs.send("gmail", "single_page_applocation", {
        "from_name": contactForm.name.value,
        "from_email": contactForm.emailaddress.value,
        'option': contactForm.option.value,
        "request": contactForm.request.value
    })

    .then(
        function(response) {
            console.log("Success!", response);
        },
        function(error) {
            console.log("Failed....", error);
        }
    );
    return false; 
}