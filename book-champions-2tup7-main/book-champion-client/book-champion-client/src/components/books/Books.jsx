import React, { useState } from 'react'
import BookItem from '../bookItem/BookItem'
import BookSearch from '../bookSearch/BookSearch'

const Books = ({ books }) => {
  const [search, setSearch] = useState("")

  const handleSearch = (value) => {
    setSearch(value)
  };

  const filteredBooks = books.filter((book) => {
    if (!search) return true
    return (
      book.bookTitle.toLowerCase().includes(search.toLowerCase()) ||
      book.bookAuthor.toLowerCase().includes(search.toLowerCase())
    )
  });

  return (
    <div className="d-flex justify-content-center flex-wrap my-5">
      <div className="container w-50 d-flex justify-content-center flex-wrap">
        <BookSearch onSearch={handleSearch} search={search} />
      </div>

      <div className="container d-flex justify-content-center flex-wrap">
        {filteredBooks.length ? (
          filteredBooks.map((book) => (
            <BookItem
              key={book.id}
              id={book.id}
              title={book.bookTitle}
              author={book.bookAuthor}
              rating={book.bookRating}
              pageCount={book.pageCount}
              imageUrl={book.imageUrl}
              available={book.available}
            />
          ))
        ) : (
          <p>No se encontraron libros</p>
        )}
      </div>
    </div>
  )
}

export default Books


