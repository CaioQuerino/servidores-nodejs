// app.ts
import http from 'node:http'
import { ControllerProducts } from './controllers/products.controller'

const controllerProducts = new ControllerProducts()

// Adiciona alguns produtos iniciais
controllerProducts.create({ id: 1, name: 'Camiseta', price: 29.99 })
controllerProducts.create({ id: 2, name: 'Calça', price: 59.99 })
controllerProducts.create({ id: 3, name: "Sapato", price: 59.99 })

const app = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/products') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(controllerProducts.list()))
  }


  if (req.method === 'POST' && req.url === '/products') {
    let body = ''
    req.on('data', chunk => { body += chunk.toString() })
    req.on('end', () => {
      try {
        const newProduct = JSON.parse(body)
        controllerProducts.create(newProduct)
        res.writeHead(201, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(newProduct))
      } catch (error) {
        res.writeHead(400)
        res.end('Invalid JSON')
      }
    })
  }

  if (req.method === 'GET' && req.url?.startsWith('/products/')) {
    const id = parseInt(req.url.split('/')[2])
    const product = controllerProducts.findById(id)
    if (product) {
      res.writeHead(200, { 'Content-Type': 'application/json' })
      res.end(JSON.stringify(product))
    } else {
      res.writeHead(404)
      res.end('Product not found')
    }
  }
})

export { app }