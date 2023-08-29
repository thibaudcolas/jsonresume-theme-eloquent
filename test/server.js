var fs = require("node:fs/promises");
var path = require("path");
const http = require("http");
var theme = require("../lib/resume");

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  var localResume = await fs.readFile(
    path.join(__dirname, "resume.json"),
    "utf-8"
  );
  res.end(theme.render(JSON.parse(localResume)));
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
