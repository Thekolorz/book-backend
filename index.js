/* const http = require('http'); */

// Server configuration
const hostname = "127.0.0.1";
const port = 5000;

const Express = require ('express');
const Books = require('./books');
const app = Express();

app.get("/", (req, res) => {
    res.status(200),
    res.send('Hello world');
});
app.get("/books", (req, res) => {
    res.status(200),
    res.send(Books);
});
app.use(Express.json()); /* Always Upper case */

app.post("/", (req, res) => {
    let newBook = req.body;
    let bookIsbn10 = newBook.isbn10;
   
    let filteredBook =Books.filter(isbnBook => {
       return (isbnBook.isbn10 === bookIsbn10);
    });
    if(filteredBook.length> 0) {
        Books.forEach(book => {
            if(book.isbn10 === bookIsbn10){
                book.numberOfCopies ++
            };
        });
        res.status(200);
        res.send(); /* IT WORKS ONLY THE BOOK IS ALREADY THERE */
    }else{
        Books.push(newBook);
        res.status(201);
        res.send(); /* to insert the book */
    };  
});



// Handle the HTTP requests with this method.
/* function requestListener(req, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World");
}
 */
// Create web server and attach a listener for all the requests.
/* var server = http.createServer(requestListener);
 */
// Start web server
app.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}/`);
});
