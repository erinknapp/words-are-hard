<<<<<<< HEAD
=======
async function getGiphys(input) {
  var giphyApiKey = "WnnzeT61NGgg3RtGQXPZDDr25T808hKc"
  var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${input}&rating=g&api_key=${giphyApiKey}`

  let giphys;


  
  await fetch(giphyApiURL).then(data => {
      giphys = data.json()
  })
  return giphys;

}



>>>>>>> 5423138900e8ebd526d7b2ecdc0421256ff3c07f
async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').value;
  const post_url = document.querySelector('input[name="post-url"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
<<<<<<< HEAD
=======


>>>>>>> 5423138900e8ebd526d7b2ecdc0421256ff3c07f