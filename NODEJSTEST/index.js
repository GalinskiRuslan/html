/* простой модуль, отображающий информацию о платформе пользователя */
const os = require("os");
console.log(os.platform());

/* Работа с файлами  модуль fs */

const fs = require("fs");

const fsdata = fs.readFileSync("log.txt", "utf-8");

fs.writeFileSync("log.txt", fsdata + "\nHello World!");

fs.readFile("log.txt", "utf-8", (error, data) => {
  console.log(error, data);
  fs.writeFile("log.txt", data + "This asinc function", (error, data) => {
    console.log("this asinc function writer!", error, data);
  });
});

/* Работа с сервером */
const http = require("http");

let server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

  /* Подключение html к ноде */
  if (req.url == "/") {
    fs.createReadStream("html/index.html").pipe(res);
  } else if (req.url == "/about") {
    fs.createReadStream("html/about.html").pipe(res);
  } else {
    fs.createReadStream("html/page404.html").pipe(res);
  }
});

const PORT = 3600;
const HOST = "localhost";

server.listen(PORT, HOST, () => {
  console.log(`server start ${HOST}: ${PORT}`);
});
