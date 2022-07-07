const {createServer} = require('http'),
      {parse} = require('url'),
      {randomUUID} = require("crypto")

async function handler(request, response) {
  if (
      request.method === 'GET' &&
      request.url.includes('products')
    ) {
      const {query:{productName}} = parse(request.url, true)
      const result = {
        id: randomUUID(),
        product: productName
      }
      return response.end(JSON.stringify({result}))
  } 
  return response.end('hey')

}
createServer(handler).listen(3000,()=>console.log('ON'))