# Node.js Web Server

A simple HTTP web server built with Node.js that serves static HTML pages.

## 📋 Project Overview

This is a basic web server created using Node.js core modules without any external frameworks. It demonstrates fundamental concepts of server-side programming including routing, file handling, and HTTP response management.

## 🚀 How the Server Works

### 1. **Server Initialization**
The server is created using Node.js built-in `http` module which provides HTTP server functionality.

### 2. **Core Components**

- **http**: Creates and manages the HTTP server
- **fs (File System)**: Reads HTML files from the file system
- **path**: Handles file path operations to locate HTML files correctly

### 3. **Request Flow**

```
Client Request → Server Receives → Route Matching → File Reading → Response Sent
```

**Step-by-Step Process:**

1. **Client sends HTTP request** to the server (e.g., `http://localhost:3000/home`)

2. **Server receives the request** and extracts:
   - HTTP method (GET, POST, etc.)
   - Requested URL path

3. **Route matching** occurs:
   - `/` or `/home` → serves `home.html`
   - `/about` → serves `about.html`
   - `/contact` → serves `contact.html`
   - Any other route → serves `404.html` (Not Found page)

4. **File reading**:
   - Server looks for the HTML file in the `page/` directory
   - Uses `fs.readFile()` to read the file content

5. **Response sent**:
   - If file is found: Sends HTML content with status code 200 (Success)
   - If file not found: Sends error with status code 500 (Server Error)
   - If route doesn't exist: Sends 404 page with status code 404 (Not Found)

### 4. **HTTP Status Codes Used**

- **200**: OK - Request successful, page found and served
- **404**: Not Found - Route doesn't exist
- **500**: Internal Server Error - File reading failed

## 📁 Project Structure

```
node/
├── server.js          # Main server file with routing logic
├── package.json       # Project dependencies and scripts
└── page/              # Directory containing HTML pages
    ├── home.html      # Home page
    ├── about.html     # About page
    ├── contact.html   # Contact page
    └── 404.html       # Error page for invalid routes
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js installed on your system (v12 or higher)

### Steps to Run

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/Yadav-Shreyash842/node_server.git
   cd node_server
   ```

2. **Install dependencies** (if any)
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```
   Or directly:
   ```bash
   node server.js
   ```

4. **Access the server**
   Open your browser and visit:
   - `http://localhost:3000/` or `http://localhost:3000/home` - Home page
   - `http://localhost:3000/about` - About page
   - `http://localhost:3000/contact` - Contact page
   - Any other URL will show the 404 error page

## 🔧 Available Routes

| Route | Description | File Served |
|-------|-------------|-------------|
| `/` or `/home` | Home page | `page/home.html` |
| `/about` | About page | `page/about.html` |
| `/contact` | Contact page | `page/contact.html` |
| Any other route | 404 Error page | `page/404.html` |

## 💡 Key Features

✅ Simple routing system  
✅ Static file serving  
✅ Error handling (404 and 500 errors)  
✅ Clean code with detailed comments  
✅ No external dependencies (pure Node.js)  



## 👤 Author

**Shreyash Yadav**


