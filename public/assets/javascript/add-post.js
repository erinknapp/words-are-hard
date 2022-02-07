async function getGiphys(input) {
  var giphyApiKey = "WnnzeT61NGgg3RtGQXPZDDr25T808hKc"
  var giphyApiURL = `https://api.giphy.com/v1/gifs/search?q=${input}&rating=g&api_key=${giphyApiKey}`

  let giphys;
  
  await fetch(giphyApiURL).then(data => {
      giphys = data.json()
  })
  return giphys;
}
async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="body.title"]').value;
  const post_url = document.querySelector('input[name="body.url"]').value;

  const response = await fetch(`/api/posts/`, {
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


