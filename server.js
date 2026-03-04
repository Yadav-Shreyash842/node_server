// Import required 
const http = require("http"); //  HTTP server
const fs = require("fs");     //  read files from the file system
const path = require("path");  // handle file paths

// Define the port 
const PORT = process.env.PORT || 3000;

// Create an HTTP server 
const server = http.createServer((req, res) => {
  
  const { method, url } = req;

  // Handle only GET requests
  if (method === "GET") {
    let filePath = "";
    
    // Route handling
    if (url === "/" || url === "/home") {
      // Home page 
      filePath = "home.html";
      res.writeHead(200, { "Content-Type": "text/html" }); 
    } else if (url === "/about") {
      // About page 
      filePath = "about.html";
      res.writeHead(200, { "Content-Type": "text/html" }); 
      
    } else if (url === "/contact") {
      // Contact page 
      filePath = "contact.html";
      res.writeHead(200, { "Content-Type": "text/html" });
      
    } else {
      // 404 Not Found 
      filePath = "404.html";
      res.writeHead(404, { "Content-Type": "text/html" }); 
    }
    
    // Read the selected HTML file 
    fs.readFile(path.join(__dirname, "page", filePath), (err, data) => {
      if (err) {
        //  Server Error
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Server Error");
      } else {
        
        res.end(data);
      }
    });
  }
});

// Start the server with port
server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
