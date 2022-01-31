const populateGiphy_1_El = document.getElementById('populateGiphy_1_');
const populateGiphy_2_El = document.getElementById('populateGiphy_2_');


let giphys = [];

function getGifs_1_() {
    var userInput = document.getElementById("input__gif_1_").value
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
            populateGiphy_1_El.appendChild(img)
            
            giphys.push(giphy.data[i])
            
        }
    })
}

function getGifs_2_() {
    var userInput = document.getElementById("input__gif_2_").value
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
            populateGiphy_2_El.appendChild(img)
            
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
