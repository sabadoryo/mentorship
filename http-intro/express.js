import express from 'express';
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/goodbye', (req,res) => {
    console.log(req.query);
    return res.status(200).json({
        'message': "goodbye"
    })
})

app.get('/api/service', async (req,res) => {
  await new Promise(resolve => setTimeout(resolve, 2000));

  return res.status(200).json({
    'message': "success",
    data : 'for (let i = 0; i < 44; i++) {}'
  }) 
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})