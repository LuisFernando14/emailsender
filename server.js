const express = require('express')
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const app = express()
const port = 3000

app.get('/', (request, response) => {
  response.send('Hello from Express!')
});

app.get('/email', (request, response) => {
    response.send('Aqui se envía el correo');
});

app.get('/pdf', async(request, response) => {
    let a = await jeje();
    response.send(a);
    // response.send('aqui se ejecuta para el pdf');
});

async function jeje() {
    const { stdout, stderr } = await exec('ls -la');
    return "stout: "+stdout+" stderr: "+stderr;
}

app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
}

  console.log(`server is listening on ${port}`)
});