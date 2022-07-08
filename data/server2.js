// curl -X POST "localhost:4000/cart" --data '{"id":"123"}'
const {createServer} = require('http')
const PORT = 4000
async function handler(request, response) {
  if (
      request.method === 'POST' &&
      request.url.includes('cart')
    ) {
      for await (const data of request){
        const item = JSON.parse(data)
        console.log('response', item)
        return response.end(`proccessed item ${item}`)
      }
    }
  return response.end('hey')
} 

createServer(handler).listen(PORT, () => console.log('CART UP ON PORT',PORT))