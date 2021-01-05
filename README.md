# Exercises | Backend Development | Book Library Application

## Introduction

We have a loot of books at home and we need to create an application to manage the books, categorize them, track when and who we lend a book to, and how many copies of a certain book we own. We need to be able to update our library when we buy a new book, modify the information of an existing book and also be able to remove a book that was lost.

We need, therefore, to be able to make the following requests to our backend applications.

`GET http://localhost/books`

This request to the web server should return the list of books in our library. The result can be something like the following:

```
[
    {
        "title": "The Art Of War",
        "author": "Sun Tzu",
        "publisher": "Magoria Books",
        "dimensions": {
            "width": 12.7,
            "height": 20.32,
            "depth": 0.41,
        },
        "boughtOn": "01.07.2017"
        "lended": true,
        "isbn10": "0981162630",
        "isbn13": "978-0981162638",
        "pages": 57,
        "language": "English"
        "to": {
            "name": "person name",
            "address": "",
            "phoneNumber": "+43 ...."
        }
    }, 
    {
        "title": "Il principe",
        "author": "Nicolò Machiavelli",
        "publisher": "BUR Biblioteca Univ. Rizzoli",
        "dimensions": {
            "width": 13,
            "height": 19.8,
            "depth": 2.2,
        },
        "boughtOn": "01.10.2015"
        "lended": false,
        "isbn10": "881706694X",
        "isbn13": "978-8817066945",
        "pages": 211,
        "language": "Italian"
    }
]
```

## Requirements

- Fork this repo
- Clone the forked repo.

## Submission

Upon completion, run the following commands:

```
$ git add .
$ git commit -m "done"
$ git push origin master
```

Create Pull Request so your teachers can check up your work.

## Instructions

### Iteration #1: Create the request handler that responds to `GET http://localhost:5000`

First response of the list will be empty.

### Iteration #2: Make your handler respond to `GET http://localhost:5000/books`

Notice the path /books at the end of the url.

> Keep in mind the following:

```
https://  api.themoviedb.org  /3/search/movie  ?query=avengers&utm=something&year=2020
  |               |                  |                           |
protocol      domain name           path                query string parameters
```

### Iteration #3: Let's create a book

Add a function that handles the request `POST http://localhost:5000/books` with the following data in the request.

The function should add the book to the books list.

```
{
    "title": "The Art Of War",
    "author": "Sun Tzu",
    "publisher": "Magoria Books",
    "dimensions": {
        "width": 12.7,
        "height": 20.32,
        "depth": 0.41,
    },
    "boughtOn": "01.07."
    "isbn10": "0981162630",
    "isbn13": "978-0981162638",
    "pages": 57,
    "language": "English"
}
```

After this was implemented, check that the previous request will return the inserted book. (Instruction 1)

### Iteration #4: Filter books

Extend the backend (enpoint build at instruction 1) with some filtering options. The following query string parameters should be handled:

| name  |  description | example |
|---|---|---|
|  `author` |  **Filter** books by author name. The search should be done with a `contains` strategy. If the Book's author contains the word given in the parameter, the book will have to be in the resulting list. | `http://localhost:5000/?author=Sun` or `http://localhost:5000/?author=Tzu` |
|  `title` |  **Filter** books by title using a `contains` strategy as for the author. | `http://localhost:5000/?title=Art` this will result in the book "The Art of War" to be returned. |
|  `language` |  **Filter** books by language using an exact equality strategy. The languagy property of the book should exactly match the given language string. The comparison though should be case insensitive. | `http://localhost:5000/?language=italian` will return the book "Il Principe" while `http://localhost:5000/?language=it` will result in an empty list. |
| `lended` | Filter for the books that are lended or books that are not lended. Dipending on the given value for this filter. | `http://localhost:5000/?lended=true` will return "The Art of War" |

The filter functions for the books list should work as a chain. The resulting books list should have considered all the given lists.

Therefore the following request to the backend application

`http://localhost:5000/?author=Sun&title=War&lended=true&language=english` will return a list of 1 element, the book "**The Art of War**".

### Iteration #5: Test your backend application's endpoints

Use `curl` or `Postman` to send the GET requests and POST requests to your backend application.
Search online how to make a POST request and send the book object to your backend.

e.g. using curl

```shell
curl -XGET http://localhost:5000/books
```

```shell
curl -XPOST http://localhost:5000/books -d "{....}"
```

### Iteration #6: Cover your functions with test cases using jest.

Code refactoring

* Improve the readability of your code by splitting up the functions in smaller functions.
* Cover your functions with unit tests using jest. Create the test cases and run them with jest to veryfy that the code is working as expected.

### Iteration #7: Obtain one single book, given it's isbn10 code

Code refactoring

* Improve the readability of your code by splitting up the functions in smaller functions.
* Cover your functions with unit tests using jest. Create some exceptions

### Iteration #8: Bonus | Persistence layer

Make your books library be persistent and independent from the state of your backend applications - i.e. Running / Stopped.

Until this point, everytime you restart your node application, your books list is reset. Find a way to make your books be stored on a persistent layer.

Search online for a way to do that autonomously.

**Happy coding!** :heart: