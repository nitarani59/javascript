fetch("https://api.artic.edu/api/v1/artworks/search?q=cats")
  .then(response => {
    console.log(response.status); // Logs the status code (e.g., 200)
    return response.json(); // Parse the response as JSON
  })
  .then(data => {
    return data.data;
  })
  .then(json => {
    for (let index = 0; index < json.length; index++) {
        const element = json[index];
        console.log("title: " + element.title)
    }
  })
