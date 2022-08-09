
import https from 'https';

async function getData(url) {
    if (url === 'https://api.imgflip.com/get_memes') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 4000, 'ImgFlip')
        })
    }
    
    if (url === 'https://fake-movie-database-api.herokuapp.com/api?s=batman') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 1000, 'Fake Movie API')
        })
    }
    
    if (url === 'https://catfact.ninja/fact') {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, 3000, 'Cats Facts')
        })
    }
}

export default getData