// const { isArgumentsObject } = require("util/types")
const populateGiphyEl = document.getElementById('populateGiphy');

let giphys = [];

function getGifs() {
    
    // document.body.removeChild(img)

    var userInput = document.getElementById("input__gif").value
    console.log(userInput)

    var giphyApiKey = "WnnzeT61NGgg3RtGQXPZDDr25T808hKc"
    var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${userInput}&rating=g&api_key=${giphyApiKey}`

    fetch(giphyApiURL).then(function(data) {
        return data.json()
    })
    .then(function(giphy) {

        for (var i = 0; i < giphy.data.length; i++) {
            console.log(giphy.data[i].images.original.url)
            // var container = document.createElement("div");
            var imgPath = giphy.data[i].images.original.url
            var img = document.createElement("img")
            img.setAttribute('src',`${imgPath}`)
            img.setAttribute('id',`${giphy.data[i].id}`)
            img.setAttribute('class','mt-2 col-6 gif__img')
            populateGiphyEl.appendChild(img)
            
            giphys.push(giphy.data[i])
            
        }
    })
}

function selectGiphy(e) {
    const {id} = e.target;
    console.log(id);
    let selectGiphy = giphys.filter(gif => gif.id === id);
    console.log(selectGiphy[0].images.original.url);
    
}


document.addEventListener('click', selectGiphy);


// function clearSearch() {
//     document.body.removeChild(img);
// }