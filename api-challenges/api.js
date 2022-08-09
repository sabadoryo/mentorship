
import https from 'https';

async function getData(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (resp) => {
            let data = '';
    
            resp.on('data', (chunk) => {
                data += chunk;
            });
    
            resp.on('end', () => {
                resolve(JSON.parse(data));
            });
    
            }).on("error", (err) => {
            reject("Error: " + err.message);
        });
    }).catch(err => {
        console.log(err)
    })
}

export default getData