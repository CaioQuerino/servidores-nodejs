import http from 'node:http'

// Simulação  de Banco de Dados

const products =[
    { id: 1, name: 'Camiseta', price: 29.99 },
    { id: 2, name: 'Jaqueta', price: 129.99 },
    { id: 3, name: 'Sapato', price: 59.99 },
    { id: 4, name: 'Cabeca', price: 79.99 }
]

const app = http.createServer((req, res) => {
 if (req.method === 'GET' && req.url === '/products') {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(products))
  }
})

export { app }