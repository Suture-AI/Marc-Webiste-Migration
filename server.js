// Minimal zero-dependency static file server for previewing the Kohnen Law designs.
// Usage: node server.js   ->   http://localhost:5173
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 5173;
const ROOT = __dirname;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
};

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split("?")[0]);
  if (urlPath === "/") urlPath = "/index.html";

  // Resolve safely within ROOT (no path traversal)
  let filePath = path.join(ROOT, urlPath);
  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403).end("Forbidden");
    return;
  }

  // If a directory was requested, serve its index.html
  fs.stat(filePath, (err, stat) => {
    if (!err && stat.isDirectory()) filePath = path.join(filePath, "index.html");

    fs.readFile(filePath, (e, data) => {
      if (e) {
        res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
        res.end("<h1>404 &mdash; Not found</h1><p><a href='/'>Back to gallery</a></p>");
        return;
      }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { "Content-Type": TYPES[ext] || "application/octet-stream" });
      res.end(data);
    });
  });
});

server.listen(PORT, () => {
  console.log(`\n  Kohnen Law designs running at:  http://localhost:${PORT}\n`);
  console.log(`  Gallery   ->  http://localhost:${PORT}/`);
  console.log(`  Design 1  ->  http://localhost:${PORT}/design-1/`);
  console.log(`  Design 2  ->  http://localhost:${PORT}/design-2/`);
  console.log(`  Design 3  ->  http://localhost:${PORT}/design-3/\n`);
});
