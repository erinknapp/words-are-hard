const populateGiphy_1_El = document.getElementById('populateGiphy_1_');
const populateGiphy_2_El = document.getElementById('populateGiphy_2_');

const searchBtn_1_ = document.getElementById('searchGifs_1_');

let giphys = [];
let selectedGiphy;

function getGifs_1_(e) {
    e.preventDefault();
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
    e.preventDefault();
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
    let filteredGiphy = giphys.filter(gif => gif.id === id);
    console.log(filteredGiphy[0].username);
    const title = filteredGiphy[0].username;
    const post_url = filteredGiphy[0].images.original.url;
        selectedGiphy = {
            title,
            post_url
        }
    
}

function sendPost() {
    if(selectedGiphy.title && selectedGiphy.post_url) {
        fetch("/api/posts/", {
            method: "post",
            body: JSON.stringify(selectedGiphy),
            headers: {
                "Content-Type": "application/json"
            }    
        }).then(() => console.log("It's Alive!!!!!"))  // close modal {}
    }
}






document.addEventListener('click', selectGiphy);
searchBtn_1_.addEventListener('submit', getGifs_1_);

