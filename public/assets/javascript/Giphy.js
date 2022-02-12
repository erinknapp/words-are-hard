const populateGiphy_1_El = document.getElementById('populateGiphy_1_');
const populateGiphy_2_El = document.getElementById('populateGiphy_2_');
const search_btn = document.getElementById('search_btn');
const post_btn = document.getElementById('post_btn');

let giphys = [];
let url;
let title;
let giphyid;

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
console.log(giphys)


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
    const {id}= e.target;
    console.log(id);
    giphyid = id;

}

function post_gify(){
    console.log(giphyid);
    let selectGiphy = giphys.filter(gif => gif.id === giphyid);
    console.log(selectGiphy);
        url= selectGiphy[0].images.original.url,
        title= selectGiphy[0].title
    
        fetch('/api/posts', {
            method: 'POST',
            body: JSON.stringify({
                post_url: url,
                title
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => {
            location.reload()
            console.log(res);
        }).catch(error => {
            console.log(error);
        })

}

search_btn.addEventListener('click', getGifs_1_ );
document.addEventListener('click', selectGiphy);
post_btn.addEventListener('click', post_gify);