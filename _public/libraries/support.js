emailjs.init({
    publicKey: "EiXNEo2-4LMfNJSs5",
});

function support() {
    const div = document.createElement('div');
    div.classList.add('support-message');
    div.style.cssText = `
        position: fixed;
        width: 300px;
        height: auto;
        display: flex;
        background: black;
        border: 1px solid white;
        text-align: center;
        border-radius: 5px;
        z-index: 1000;
        color: white;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 10px;
        justify-content: flex-start;
        align-items: center;
        flex-direction: column;
    `;
    div.innerHTML = `
        <h1>Support</h1>
        <p>Please enter clear information about any problems or ideas.</p>
        <textarea id="support-message" style="width: 100%; height: 100px; margin-bottom: 10px; background: black; color: white; resize: none;"></textarea>
        <button id="support-submit" style="padding: 5px; border: 1px solid white; border-radius: 5px; width: 100%;">Submit</button>
    `;

    document.body.append(div);

    // Add event listener to the submit button
    document.getElementById('support-submit').addEventListener('click', function () {
        const message = document.getElementById('support-message').value;

        if (message.length < 10) {
            alert('Message is too short. Please enter at least 10 characters.');
            return;
        }

        emailjs.send("service_2j3fbbg", "template_niuqeck", {
            message: message,
            to_email: "support@ecxogames.ca" // Replace with your support email
        })
            .then(function (response) {
                alert('Message sent successfully!');
                div.remove();
            }, function (error) {
                alert('Failed to send message. Please try again later.');
            });
    });

    // Add event listener to detect clicks outside the div
    setTimeout(() => {
        document.addEventListener('click', function (event) {
            if (!div.contains(event.target)) {
                div.remove();
            }
        });
    }, 0);

}