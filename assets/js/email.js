var sendMail ={
    'from_name': name.value,
    'from_email': emailaddress.value,
    'request': request.value
}
 
emailjs.send('gmail', 'single_page_applocation', sendMail)
    .then(function(response) {
       console.log('SUCCESS!', response.status, response.text);
    }, function(error) {
       console.log('FAILED...', error);
    });
