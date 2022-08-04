
import https from 'https';

async function getCatsFact() {
    return new Promise((resolve, reject) => {
        https.get('https://catfact.ninja/fact', (resp) => {
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

export default getCatsFact