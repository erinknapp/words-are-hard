function sendApiRequest() {
    var userInput = document.getElementById("input").value
    console.log(userInput)

    var giphyApiKey = "WnnzeT61NGgg3RtGQXPZDDr25T808hKc"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`

    fetch(giphyApiURL).then(data => {
        return data.json()
    })
    .then(giphyData => {
        console.log(giphyData)
    })
}

module.exports = sendApiRequest;