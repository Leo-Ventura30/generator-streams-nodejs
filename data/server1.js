// curl -X GET "localhost:4000/cart" --data '{"id":"123"}'

const {createServer} = require('http'),
      {parse} = require('url'),
      {randomUUID} = require("crypto")
const PORT = 3000
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
createServer(handler).listen(PORT, () => console.log('PRODUCTS UP ON PORT',PORT))