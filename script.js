const accessToken = "b1H0TMuowc4OfIrwEDbCuw==NMlddTFt9YCYPsF6";
const options = {
    method: "get",
    headers: {
        "X-Api-Key": accessToken,
    },
};
const joke = document.getElementById('jokes');

async function loadJokes() {
    const apiUrl = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
    joke.textContent = "Loading...";

    try {
        const res = await fetch(apiUrl, options);
        const data = await res.json();

        if (data && data.length > 0) {
            joke.textContent = data[0].joke;
        } else {
            joke.textContent = "No jokes found";
        }
    } catch (error) {
        console.error("Error loading jokes:", error);
        joke.textContent = "Failed to load jokes";
    }
}
