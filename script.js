fetch('https://icanhazdadjoke.com/slack')
    .then(response => response.json()) // Corrected 'data' to 'response'
    .then(jokeData => {
        const jokeText = jokeData.attachments[0].text;
        const jokeElement = document.getElementById('jokeElement'); // Corrected 'decument' to 'document'

        jokeElement.innerHTML = jokeText;
    })
    .catch(error => {
        console.error('Error fetching joke:', error);
        // Handle error appropriately, e.g., show an error message in the UI
    });
