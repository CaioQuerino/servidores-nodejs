import http from "node:http"
import { ControllerOperations } from "../controllers/operations.controller"

const controllerOperations = new ControllerOperations()

const OperationsRoutes = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/operations/sum") {
        const url = new URL(req.url, `http://${req.headers.host}`)
        const x = parseFloat(url.searchParams.get("x") || "0")
        const y = parseFloat(url.searchParams.get("y") || "0")
        const result = controllerOperations.sum(x, y)
    
        res.writeHead(200, { "Content-Type": "application/json" })
        res.end(JSON.stringify({ result }))
    } else {
        res.writeHead(404)
        res.end("Not Found")
    }
})

export { OperationsRoutes }