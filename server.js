const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET") {
    let filePath = "";
     if (url === "/" || url === "/home") {
      filePath = "home.html";
      res.writeHead(200, { "Content-Type": "text/html" });
  } else if (url === "/about") {
      filePath = "about.html";
      res.writeHead(200, { "Content-Type": "text/html" });

    } else if (url === "/contact") {
      filePath = "contact.html";
      res.writeHead(200, { "Content-Type": "text/html" });
    } else {
      filePath = "404.html";
      res.writeHead(404, { "Content-Type": "text/html" });
    }fs.readFile(path.join(__dirname, "page", filePath), (err, data) => {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        res.end(data);
      }
    });
  }
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
