const axios = require('axios')

const myDB = async ()=> Array.from({length:1000}, (v, index)=> `${index}-cellphone`)

const PRODUCTS_URL = 'http://localhost:3000/products'
const CART_URL = 'http://localhost:4000/cart'

async function processData(){
  const products = await myDB()
  const response = []
  for (const product of products) {
    const { data: productInfo } = await axios.get(`${PRODUCTS_URL}?productName=${product}`)
    const { data: cartData } = await axios.post(`${CART_URL}`, productInfo)
    console.log('product info', productInfo)
    response.push(cartData)
  }
}
// (async()=> {
//   await processData()
// })()

async function* processDataGenerator(){
  const products = await myDB()
  const response = []
  for (const product of products) {
    const { data: productInfo } = await axios.get(`${PRODUCTS_URL}?productName=${product}`)
    const { data: cartData } = await axios.post(`${CART_URL}`, productInfo)
    console.log('product info', productInfo)
    yield cartData
  }
}
(async()=>{
    for await(const data of processDataGenerator()){
      setTimeout(()=>"hey",1000)
      console.table(data)
    }
  }
)()