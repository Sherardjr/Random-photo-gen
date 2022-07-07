import "./style.css";

//Fetch URL
fetch("https://picsum.photos/v2/list?page=2&limit=100")
  .then((response) => response.json())
  .then((listOfPhotos) => {
    //Function to get 100 random images
    let i = Math.floor(Math.random() * 100);

    //Display image, author and image ID
    console.log(i, listOfPhotos[i].id, listOfPhotos[i].download_url);
    document.querySelector("#app").innerHTML += `
            <h2>
              ${listOfPhotos[i].author} - ${listOfPhotos[i].id}
            </h2>
            
            <img src="${listOfPhotos[i].download_url}" alt="Random image" />`;
    //Get list of photos from url
  });
