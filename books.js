const books = [
  {
      title: "The Art Of War",
      author: "Sun Tzu",
      publisher: "Magoria Books",
      dimensions: {
          width: 12.7,
          height: 20.32,
          depth: 0.41,
      },
      boughtOn: "01.07.2017",
      lended: true,
      isbn10: "0981162630",
      numberOfCopies: 1,
      isbn13: "978-0981162638",
      pages: 57,
      language: "English",
      to: {
          "name": "person name",
          "address": "",
          "phoneNumber": "+43 ...."
      }
  },
  {
      title: "Il principe",
      author: "Nicolò Machiavelli",
      publisher: "BUR Biblioteca Univ. Rizzoli",
      dimensions: {
          width: 13,
          height: 19.8,
          depth: 2.2,
      },
      boughtOn: "01.10.2015",
      lended: false,
      isbn10: "881706694X",
      numberOfCopies: 1,
      isbn13: "978-8817066945",
      pages: 211,
      language: "Italian"
  }
]

module.exports = books;