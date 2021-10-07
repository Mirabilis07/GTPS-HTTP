const http = require('http');

const server = http.createServer(function (req, res) {
    
    if (req.url == "/growtopia/server_data.php") {
        if (req.method === "POST") {
        res.write('server|127.0.0.1\nport|17091\ntype|1\n#maint|Server is on maintenance.');
        res.end();
    }
    else {
        res.writeHead(200, { "Content-Type": "text/html" })
        res.end();
    }
}
});
server.listen(80);
console.log('HTTP server is up.')
