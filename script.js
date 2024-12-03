document.getElementById('friendshipForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    document.getElementById('response').innerText = `Thank you, ${name}! Your message: "${message}" has been received.`;
});