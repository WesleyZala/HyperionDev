//Compulsory Task

async function getUrlOfGifWebsite() {
    const response = await fetch('http://thecatapi.com/api/images/get?format=src&type=gif');
    const url = response.url;
    console.log(url);
  }
  
  getUrlOfGifWebsite();