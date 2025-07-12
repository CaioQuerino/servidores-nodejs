import http from "node:http"

const app = http.createServer((req, res) => {
    if (req.method === "GET" && req.url === "/") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Welcome to the Node.js Server!");
        }
    }
)


app.listen(3333, () => {
    console.log("Server is running on http://localhost:3333");
})